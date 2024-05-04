import { createSlice } from '@reduxjs/toolkit';

const initialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContacts: (state, { payload }) => {
      state.contacts = payload; // Immer
      //   return { ...state, contacts: payload }; // w/o Immer
    },
    addContacts: (state, { payload }) => {
      state.contacts.push(payload);
      //   return { ...state, contacts: [...state.contacts, payload] };
    },
  },
});

export const { createContacts, addContacts } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
