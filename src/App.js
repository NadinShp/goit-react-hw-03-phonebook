import { Component } from 'react';
import 'modern-normalize/modern-normalize.css';
import Contacts from './components/Contacts/Contacts';
import ContactForm from './components/Form/ContactForm';
import Filter from './components/Filter/Filter';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  handleExistingContact = name => {
    const { contacts } = this.state;
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };
  handleAddContacts = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  filterByInputValue = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    console.log('App render');
    const { filter } = this.state;
    const filteredNames = this.filterByInputValue();
    return (
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleAddContacts}
          onCheck={this.handleExistingContact}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
        <Contacts
          contacts={filteredNames}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
export default App;
