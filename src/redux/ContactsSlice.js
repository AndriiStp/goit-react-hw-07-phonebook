import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './fetching';

const contactInitState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchContactsFullfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleAddContactFullfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handleDeleteContactFullfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(contact => contact.id !== action.payload);
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, handleFetchContactsFullfilled)
      .addCase(addContact.fulfilled, handleAddContactFullfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactFullfilled),
});

export const contactsReducer = contactsSlice.reducer;
