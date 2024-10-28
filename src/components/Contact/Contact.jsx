import clsx from 'clsx';
import css from './Contact.module.css';
import { FaPhone, FaUser } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    const action = { type: 'contacts/deleteContact', payload: id };
    dispatch(action);
  };

  return (
    <div className={clsx(css.contactWrapper)}>
      <div className={clsx(css.userInfo)}>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button className={clsx(css.delBtn)} type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
