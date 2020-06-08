import React, { Fragment, useContext, useEffect } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../Context/Contact/contactContext';
import Spinner from '../layout/Spinner';

const Contacts = props => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading} = contactContext;

  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      { contacts !== null && !loading ? (filtered !== null ? 
        filtered.map(contact => <ContactItem key={contact._id} contact={contact} /> ) : 
        contacts.map(contact => <ContactItem key={contact._id} contact={contact} /> )  ) : <Spinner /> }
    </Fragment>
  )
}

export default Contacts;
