import Contact from "../Contact/Contact";
import s from "./ConactList.module.css";

const ContactList = ({ userContacts = [], onDelete, searchStr }) => {
  if (!userContacts.length && searchStr)
    return <h3>Search query not vailid</h3>;
  else if (!userContacts.length) return <h3>No data...</h3>;
  return (
    <div>
      <h2>Contacts</h2>
      <ul className={s.list}>
        {userContacts.map((contact) => (
          <Contact item={contact} key={contact.id} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
