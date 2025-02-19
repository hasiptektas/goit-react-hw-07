import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{width: "500px"}}>
      <h1 className='bg-warning color text-center p-3 rounded-4'>Phonebook</h1>
      
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex gap-5 justify-content-center align-items-center' style={{height: '40px', width: '400px'}}>
          <p>Kişi Bul</p>
          <SearchBox />
        </div>
        <ContactForm />
      </div>
      <ContactList />
    </div>
  );
}

export default App;