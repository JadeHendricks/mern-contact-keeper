import React, { useReducer } from 'react';
import {v4 as uuidv4} from "uuid";
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
      ],
      current: null
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //add contact
    const addContact = contact => {
      contact.id = uuidv4();
      dispatch({ type: ADD_CONTACT, payload: contact });
    }
    //delete contact
    const deleteContact = id => {
      dispatch({ type: DELETE_CONTACT, payload: id });
    }
    //set current contact
    const setCurrent = contact => {
      dispatch({ type: SET_CURRENT, payload: contact });
    }
    //clear current contact
    const clearCurrent = () => {
      dispatch({ type: CLEAR_CURRENT });
    }
    //update contact
    //filter contacts
    //clear filter

    return (
      <ContactContext.Provider
        value={{
          contacts: state.contacts,
          current: state.current,
          addContact,
          deleteContact,
          setCurrent,
          clearCurrent
        }}
      >
        {props.children}
      </ContactContext.Provider>
    );
  }

  export default ContactState;