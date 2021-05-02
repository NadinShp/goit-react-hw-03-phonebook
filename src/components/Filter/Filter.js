import PropTypes from 'prop-types';
import styles from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => (
    <>
        <label className={styles.label}>Find contacts by name
            <input className={styles.input} name="filter" type="text" value={value} onChange={onChangeFilter} />
        </label>
    </>
);

Filter.defaultProps = {
    value: '',
}
Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func.isRequired,
}

export default Filter;