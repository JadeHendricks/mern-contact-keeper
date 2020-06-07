import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../Context/Contact/contactContext';
import PropTypes from 'prop-types';

const ContactForm = props => {

  const contactContext = useContext(ContactContext);

  useEffect(() => {
    if (contactContext.current !== null) {
      setContact(contactContext.current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, contactContext.current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e => setContact({...contact, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault();

    if (contactContext.current === null ) {
      contactContext.addContact(contact);
    } else {
      contactContext.updateContact(contact);
    }
    
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
  }

  const clearAll = () => {
    contactContext.clearCurrent();
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{ contactContext.current ? 'Edit Contact': 'Add Contact' }</h2>
      <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} />
      <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} />
      <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange} />
      <h5>Contact Type</h5>
      <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} /> Personal{' '}
      <input type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onChange} /> Professional{' '}
      <div>
        <input type="submit" value={ contactContext.current ? 'Update Contact': 'Add Contact' } className="btn btn-primary btn-block" />
        { contactContext.current && 
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
        </div> 
        }
      </div>
    </form>
  )
}

ContactForm.propTypes = {

}

export default ContactForm;
