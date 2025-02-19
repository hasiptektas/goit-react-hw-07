import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsOps';

function ContactForm() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Lütfen Minimum 3 Karakter Girin')
      .max(50, 'Lütfen 3-50 arasında Karakter Girin')
      .required('Lütfen Alanı Doldurun'),
    number: Yup.string()
      .min(3, 'Lütfen Minimum 3 Hane Girin')
      .max(50, 'Lütfen 3-50 arasında Sayı Girin')
      .required('Lütfen Alanı Doldurun'),
  });

  return (
    <div>
      <Button variant="success" onClick={handleShow}>
        Kişi Ekle
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Dialog style={{ width: '100%', height: '100%', margin: '0' }}>
          <Modal.Header closeButton>
            <Modal.Title>Kişi Ekle</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Formik
              initialValues={{ name: '', number: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                dispatch(addContact(values));
                setSubmitting(false);
                resetForm();
                handleClose();
              }}
            >
              {({ isSubmitting }) => (
                <Form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <Field
                      style={{ padding: '5px 10px' }}
                      type="text"
                      name="name"
                      placeholder="İsmi Girin"
                    />
                    <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
                  </div>
                  <div>
                    <Field
                      style={{ padding: '5px 10px' }}
                      type="text"
                      name="number"
                      placeholder="Numarayı Girin"
                    />
                    <ErrorMessage name="number" component="div" style={{ color: 'red' }} />
                  </div>
                  <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                    Ekle
                  </button>
                </Form>
              )}
            </Formik>
          </Modal.Body>

          <Modal.Footer></Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default ContactForm;