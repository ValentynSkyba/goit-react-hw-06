import Contact from "../Contact/Contact";
import s from "./ConactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchStr = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const getFilteredData = () => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  };
  const filteredData = getFilteredData();

  if (!filteredData.length && searchStr) {
    return <h2 className={s.header}>Contact you searching doesn`t exist</h2>;
  } else if (!filteredData.length) {
    return <h2 className={s.header}>No available contacts...</h2>;
  }
  return (
    <div>
      <h2>Contacts</h2>
      <ul className={s.list}>
        {filteredData.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
