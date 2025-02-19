/* eslint-disable react/prop-types */
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsOps';

export default function Contact({ person }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(person.id));
  };

  return (
    <li className="list-unstyled py-3">
      <Card>
        <Card.Body className="d-flex justify-content-between w-100 align-items-center">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              {person.name}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '5px' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              {person.number}
            </div>
          </div>
          <Button
            className="bg-danger px-4"
            style={{ height: '40px', border: 'none' }}
            onClick={handleDelete}
          >
            Sil
          </Button>
        </Card.Body>
      </Card>
    </li>
  );
}