import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ConactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import contactsData from "./common/contacts.json";
import { toast } from "react-toastify";

const App = () => {
  const [userContacts, setUserContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));
    if (savedContacts?.length) return savedContacts;
    return contactsData;
  });
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(userContacts));
  }, [userContacts]);

  const handleDelete = (id) => {
    setUserContacts((prev) => prev.filter((item) => item.id !== id));
    toast.success("Contact deleted successfully");
    sortData();
  };

  const getFilteredContacts = () => {
    return userContacts.filter((item) =>
      item.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  const sortData = () => {
    setUserContacts((prev) =>
      prev.sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const addContact = (contact) => {
    const isExist = userContacts.some(
      (item) => item.name === contact.name && item.number === contact.number
    );
    if (isExist) return toast.error(`${contact.name} is already in contacts`);
    setUserContacts((prev) => [...prev, contact]);
    toast.success("Contact added successfully");
    sortData();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchStr={searchStr} onSearch={setSearchStr} />
      <ContactList
        searchStr={searchStr}
        userContacts={filteredContacts}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
