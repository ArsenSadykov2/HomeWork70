import { Contact } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  contacts: Contact[];
  onDelete: (id: number) => void;
}

const ListOfContact: React.FC<Props> = ({contacts, onDelete}) => {
  return (
    <div className="container">
      <Link to="/add-contact">
        <button>Add new Contact</button>
      </Link>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p><strong>Имя:</strong> {contact.name}</p>
            <p><strong>Телефон:</strong> {contact.phone}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <img src={contact.image} alt={contact.name} className="contact-photo"/>
            <div>
              <Link to={`/edit-contact/${contact.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfContact;