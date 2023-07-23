// import { useState, useEffect } from 'react';
import css from './App.module.css';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const App = () => {
  return (
    <div>
      <h1 className={css.header}>PhoneBook</h1>
      <Form />
      <h2 className={css.header}>Contacts:</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
