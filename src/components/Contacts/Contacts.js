import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const Contacts = ({ contacts, onDeleteContact }) => (
    <ul className={styles.contacts__list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} >
                <div className={styles.item}>
                    <p className={styles.info}>{name}: {number}</p>
                    <button className={styles.button} type="button" onClick={() => onDeleteContact(id)}>Delete</button>
                </div>
            </li>
        ))}
    </ul>
);

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
}
export default Contacts;