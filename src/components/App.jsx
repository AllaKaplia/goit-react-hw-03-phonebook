import React, { Component } from "react";
import ContactList from "./ContactList";
import FilterContacts from "./FilterContacts";
import FormContact from "./FormContact";
import { Container } from './App.styled'


class App extends Component {
  state = {
    contacts:  [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  formSubmitHandle = contact => {
    const { contacts } = this.state;
    const existingContact = contacts.find(c => c.name.toLowerCase() === contact.name.toLowerCase());
  
    if (existingContact) {
      alert('A contact with this name already exists!');
      return;
    }

    this.addContact();
  }

  addContact = (contact) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  }
 

  changeFilter = evt => {
    this.setState({filter: evt.currentTarget.value});
  }

  deleteContact = (contactName) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => 
        contact.name !== contactName)
    }))
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter ? filter.toLowerCase() : '';
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <FormContact addContact={this.addContact}/>
        <h2>Contacts</h2>
        <FilterContacts value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}

export default App;