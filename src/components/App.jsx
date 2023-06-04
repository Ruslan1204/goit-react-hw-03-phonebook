import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import css from '../components/App.module.css';

const localContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts =
      JSON.parse(localStorage.getItem('contacts')) || localContacts;
    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleDeleteContact = id => {
    this.setState(prevState => {
      const newContactsList = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return { contacts: newContactsList };
    });
  };

  handleAddContacts = (name, number) => {
    const contact = { id: nanoid(), name, number };

    const mapName = this.state.contacts
      .map(contact => {
        return contact.name;
      })
      .join(' ')
      .includes(contact.name);

    if (!mapName) {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    } else {
      return alert(`${name} is already in contacts.`);
    }
  };

  changeFilter = evt => {
    const { value } = evt.target;

    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.handleAddContacts} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDelete={this.handleDeleteContact}
        />
      </div>
    );
  }
}
