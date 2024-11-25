import { Contact, ContactForm } from '../types';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  onSubmit: (contact: ContactForm) => void;
  contact?: Contact;
}

const FormOfContact: React.FC<Props> = ({onSubmit, contact}) => {
  const navigate = useNavigate();
  const [formInfo, setFormInfo] = useState<ContactForm>({
      name: String(contact?.name),
      phone: String(contact?.phone),
      email: String(contact?.email),
      image: String(contact?.image),
    }
  );

  const editChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const addSubmit = (e: React.FormEvent) => {e.preventDefault(); onSubmit(formInfo); navigate('/')};
  return (
    <div>
      <form onSubmit={addSubmit}>
        <div>
          <input
            type="text"
            name="name"
            onChange={editChanges}
            placeholder="Имя"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="phone"
            onChange={editChanges}
            placeholder="Номер телефона"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            onChange={editChanges}
            placeholder={`Электронная почта`}
            required
          />
        </div>

        <div>
          <label htmlFor="photo">Фото (добавьте URl ссылку на фото)</label>
          <input
            type="text"
            name="image"
            onChange={editChanges}
          />
          {formInfo.image}
        </div>

        <button type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default FormOfContact;