import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { Contact, ContactForm } from './types';
import ListOfContact from './components/listOfContact.tsx';
import FormOfContact from './components/formOfContact.tsx';
import Redaction from './components/redaction.tsx';



const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (newContact: ContactForm) => {
    const contactsId = { id: Date.now(), ...newContact, };
    setContacts((prevContacts) => [...prevContacts, contactsId]);
  };

  const redactContact = (id: number, changedContact: ContactForm) => {
    const editContacts = contacts.map(contact => {
        if(contact.id === id) {
          return {
            ...contact, ...changedContact,
          }
        } else {
          return {
            ...contact
          }
        }
    }
    );
    setContacts(editContacts);
  };

  const deleteContact = (id: number) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Router>
      <div className="container">
          <h1>Mortal Kombat Characters</h1>
        <Routes>
          <Route path="/add-contact" element={<FormOfContact onSubmit={addContact} />} />
          <Route path="/" element={<ListOfContact contacts={contacts} onDelete={deleteContact} />} />
          <Route path="/edit-contact/:id" element={<Redaction contacts={contacts} onEdit={redactContact} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
