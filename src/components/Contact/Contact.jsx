import { IoIosBody, IoIosCall } from "react-icons/io";
import s from "./Contact.module.css";
const Contact = ({ item, onDelete }) => {
  const { id, name, number } = item;
  return (
    <li className={s.item}>
      <h3>
        {" "}
        <IoIosBody className={s.icon} />
        {name}
      </h3>
      <p>
        <IoIosCall className={s.icon} />
        {number}
      </p>
      <button onClick={() => onDelete(id)} type="button" className={s.btn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
