import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/ContactsSlice';
import { filterReducer } from '../redux/FilterSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
