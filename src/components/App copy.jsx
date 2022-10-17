import { useState, useEffect } from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from 'components/App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (values, { resetForm }) => {
    resetForm();

    const { name, number } = values;
    const contact = {
      name,
      number,
    };
    const dublicateContact = findDublicateContact(contact, contacts);
    dublicateContact
      ? alert(`${contact.name} is already in contacts`)
      : setContacts([...contacts, { ...values, id: nanoid() }]);
  };

  const findDublicateContact = (contact, contactsList) => {
    return contactsList.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const onFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const getNeeddedCard = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteCard = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />

      {!!contacts.length && (
        <>
          <h2>Contacts</h2>
          <Filter value={filter} onFilterChange={onFilterChange} />
        </>
      )}

      <ContactList neddedCards={getNeeddedCard()} deleteCard={deleteCard} />
    </Container>
  );
};
