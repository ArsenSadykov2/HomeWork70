import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Contact, ContactForm, } from '../types';
import FormOfContact from './formOfContact.tsx';

interface Props {
  contacts: Contact[];
  onEdit: (id: number, changedContact: ContactForm) => void;
}

const Redaction: React.FC<Props> = ({ contacts, onEdit }) => {
  const { id } = useParams();
  const contactId = contacts.find(c => c.id === Number(id));

  const submitBtn = (formInfo: ContactForm) => {
    const navigate = useNavigate();
    if (contactId) {
      onEdit(contactId.id, formInfo);
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Edit contact</h1>
      <FormOfContact onSubmit={submitBtn} contact={contactId} />
    </div>
  );
};

export default Redaction;
