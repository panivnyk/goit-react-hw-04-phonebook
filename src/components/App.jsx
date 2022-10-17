import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Div, Header, PContact, Section, Message } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleInput = (values, { resetForm }) => {
    const { name, number } = values;
    const contact = {
      name,
      number,
    };
    const dublicateContact = findDublicate(contact, contacts);
    dublicateContact
      ? alert(`${contact.name} or ${contact.number} is already in contacts`)
      : setContacts([...contacts, { ...values, id: nanoid() }]);

    resetForm();
  };

  const findDublicate = (contact, contactsList) => {
    return contactsList.find(
      item =>
        item.name.toLowerCase() === contact.name.toLowerCase() ||
        item.number === contact.number
    );
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const displayedContacts = getFilterContacts();
  return (
    <Div>
      <Header>Phonebook</Header>
      <Section>
        <ContactForm onSubmit={handleInput} />
      </Section>
      <PContact>Contacts</PContact>
      <Filter value={filter} onValueChange={changeFilter} />
      {contacts.length === 0 && <Message>There is not any contacts</Message>}
      <ContactList contacts={displayedContacts} deleteContact={deleteContact} />
    </Div>
  );
};
