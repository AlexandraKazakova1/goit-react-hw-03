import React from "react";
import s from "./Contact.module.css";
const Contact = ({ name, number }) => {
  return (
    <div className={s.contact_container}>
      <div className={s.contact_container_text}>
        <p className={s.contact_name}>{name}</p>
        <p className={s.contact_number}>{number}</p>
      </div>
      <button className={s.contact_btn} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
