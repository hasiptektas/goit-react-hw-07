import { useSelector } from 'react-redux';
import Contact from './Contact';
import { selectFilteredContacts, selectLoading, selectError } from '../redux/contactsSlice';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <div>
      {filteredContacts.map((person) => (
        <Contact key={person.id} person={person} />
      ))}
    </div>
  );
}