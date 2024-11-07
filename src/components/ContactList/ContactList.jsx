import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul className={s.contact_list}>
        {contacts.map((contact) => (
          <li className={s.contact_item} key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
