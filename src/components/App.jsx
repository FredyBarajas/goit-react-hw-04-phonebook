import React, { Component } from 'react';
import Formulario from './Formulario/Formulario';
import ListContacts from './ListContacs/ListContacs';
import { AppInput, AppDiv, AppTitle } from './StyledApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    let localContacts = JSON.parse(localStorage.getItem('localContacts'));
    console.log(localContacts);
    console.log(this.state.contacts);
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      Array.isArray(this.state.contacts) &&
      this.state.contacts !== prevState.contacts
    ) {
      localStorage.setItem(
        'localContacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = index => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter((_, i) => i !== index),
    }));
  };

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { contacts, searchTerm } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <>
        <AppDiv>
          <h1>PhoneBook</h1>
          <Formulario addContact={this.addContact} contacts={contacts} />
          <AppInput
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={this.handleSearch}
          />
        </AppDiv>
        <AppTitle>List Contacts</AppTitle>
        <ListContacts
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
