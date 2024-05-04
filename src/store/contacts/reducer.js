import { createReducer } from '@reduxjs/toolkit';
// import { ADD_CONTACT, CONTACTS } from './types';
import { contactsAction, addContactAction } from './actions';

const initialState = { contacts: [] };

/* export const contactReducer = (state = initialState, { type, payload })=> {
    if (type === CONTACTS) return (...state, contacts: payload)
        else if (type === ADD_CONTACT) return { ...state, contacts: [...state.contacts, payload] }; else return state
}; */

export const contactReducer = createReducer(initialState, buider => {
  buider
    .addCase(contactsAction, (state, { payload }) => {
      return { ...state, contacts: payload };
    })
    .addCase(addContactAction, (state, { payload }) => {
      return { ...state, contacts: [...state.contacts, payload] };
    });
});
