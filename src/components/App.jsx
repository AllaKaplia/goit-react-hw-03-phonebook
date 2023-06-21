import React, { Component } from "react";
import ContactList from "./ContactList";
import FilterContacts from "./FilterContacts";
import FormContact from "./FormContact";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
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

  formSubmitHandle = newContact => {
    const { contacts } = this.state;
  
    const existingContactByName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
  
    const existingContactByNumber = contacts.find(
      contact => contact.number === newContact.number
    );
  
    if (existingContactByName) {
      toast.warn('A contact with this name already exists!');
      return;
    }
  
    if (existingContactByNumber) {
      toast.info('A contact with this number already exists!');
      return;
    }
  
    this.addContact(newContact);
  }
  
  

  addContact = (contact) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  }

  componentDidMount (){
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if(parsedContacts){
      this.setState({ contacts: parsedContacts });
    }
  }
 
  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.contacts !== this.state.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
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
        <FormContact addContact={this.formSubmitHandle}/>
        <h2>Contacts</h2>
        <FilterContacts value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
        <ToastContainer theme="colored"/>
      </Container>
    );
  }
}

export default App;