import { nanoid } from 'nanoid';
import { ContactsList, ContactItem, RemoveBtn } from './ContactsList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ContactsList>
        {contacts.map(({ name, number }) => (
          <ContactItem key={nanoid()}>
            {name}: {number}
            <RemoveBtn type='button' onClick={() => onDeleteContact(name)}>
              Remove
            </RemoveBtn>
          </ContactItem>
        ))}
      </ContactsList>
    );
}

export default ContactList;