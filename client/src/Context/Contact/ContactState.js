import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import { 
  ADD_CONTACT, 
  DELETE_CONTACT, 
  SET_CURRENT, 
  CLEAR_CURRENT, 
  UPDATE_CONTACT, 
  FILTER_CONTACT,
  CLEAR_FILTER   } from '../types'

  const ContactState = props => {
    const initialState = {
      contacts: [
        {
          id: 1,
          name: 'Harry White',
          email: 'phone',
          phone: '111-111-111',
          type: 'professional'
        },
        {
          id: 2,
          name: 'Jimmy Snow',
          email: 'phone',
          phone: '222-222-222',
          type: 'personal'
        },
        {
          id: 3,
          name: 'Adam Jones',
          email: 'phone',
          phone: '333-333-333',
          type: 'professional'
        }
      ]
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //add contact
    //delete contact
    //set current contact
    //clear current contact
    //update contact
    //filter contacts
    //clear filter

    return (
      <ContactContext.Provider
        value={{
          contacts: state.contacts
        }}
      >
        {props.children}
      </ContactContext.Provider>
    );
  }

  export default ContactState;