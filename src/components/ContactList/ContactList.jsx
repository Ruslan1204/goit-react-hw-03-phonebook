import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        const handleDeleteContact = () => {
          onDelete(id);
        };
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={handleDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
