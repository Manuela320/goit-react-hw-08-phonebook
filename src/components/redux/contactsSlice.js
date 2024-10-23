import { createSlice } from '@reduxjs/toolkit';

// Definim slice-ul pentru contacte
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    setContacts: (state, action) => action.payload,  
    addContact: (state, action) => {
      state.push(action.payload);  
    },
    removeContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);  
    },
  },
});


export const { setContacts, addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;