import PropTypes from 'prop-types';
import { Contacts, ContactsItem } from './ContactList.styled';
import { ImCancelCircle } from 'react-icons/im';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Contacts>
      {contacts.map(contact => (
        <ContactsItem key={contact.id}>
          {contact.name} : {contact.number}
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            <ImCancelCircle />
          </button>
        </ContactsItem>
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
