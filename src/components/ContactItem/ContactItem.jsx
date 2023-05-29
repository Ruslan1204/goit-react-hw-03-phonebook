import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

export const ContactItem = ({name, number, onDelete }) => {
  return (
    <li className={css.item}>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};


ContactItem.ropTypes={
    name:PropTypes.string.isRequired, 
    number:PropTypes.string.isRequired, 
    onDelete: PropTypes.func,
}