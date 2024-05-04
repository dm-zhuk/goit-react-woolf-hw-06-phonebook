import { createAction } from '@reduxjs/toolkit';
// import { ADD_CONTACT, CONTACTS } from './types';

/* export const contactsAction = value => {
  return { type: CONTACTS, payload: value };
};
 export const addContactAction = value => {
  return { type: ADD_CONTACT, payload: value };
};

export const contactsAction = createAction('CONTACTS');
export const contactsAction = createAction('CONTACTS');
 */
export const contactsAction = createAction('contacts/getContacts');
export const addContactAction = createAction('contacts/addContacts');
