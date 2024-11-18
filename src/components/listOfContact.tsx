import { Contact } from '../types';

interface Props {
  contacts: Contact[];
  onDelete: (id: number) => void;
}

const ListOfContact: React.FC<Props> = ({contacts, onDelete}) => {
  return (
    <div className="container">
      <button>Add new contact</button>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p><strong>Имя:</strong> {contact.name}</p>
            <p><strong>Телефон:</strong> {contact.phone}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <img src={contact.image} alt={contact.name} className="contact-photo"/>
            <div>
              <button>Редактировать</button>
              <button onClick={() => onDelete(contact.id)}>Удалить</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfContact;