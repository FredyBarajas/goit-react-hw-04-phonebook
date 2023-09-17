import React, { useState, useEffect } from 'react';
import Formulario from './Formulario/Formulario';
import ListContacts from './ListContacs/ListContacs';
import { AppInput, AppDiv, AppTitle } from './StyledApp';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
    console.log(contacts);
  };

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('localContacts'));
    if (localContacts) {
      setContacts(localContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('localContacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = index => {
    setContacts(prevContacts => prevContacts.filter((_, i) => i !== index));
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <AppDiv>
        <h1>PhoneBook</h1>
        <Formulario addContact={addContact} contacts={contacts} />
        <AppInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </AppDiv>
      <AppTitle>List Contacts</AppTitle>
      <ListContacts
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </>
  );
};

export default App;
