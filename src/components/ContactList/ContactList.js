// import PropTypes from 'prop-types'; // ES6
import css from './ContacList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/ContactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filterContacts = useSelector(state => state.filter);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filtered = contacts.filter(contact =>
    contact.nameInput.toLowerCase().includes(filterContacts.toLowerCase())
  );

  return (
    <ul className={css.contact__list}>
      {filtered.map(({ id, nameInput, numberInput }) => (
        <li className={css.item} key={id}>
          {nameInput}: {numberInput}
          <button
            type="button"
            onClick={() => handleDelete(id)}
            className={css.button__delete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;
