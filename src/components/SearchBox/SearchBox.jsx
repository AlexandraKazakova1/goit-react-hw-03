import { Field, Form, Formik } from "formik";
import React from "react";

const SearchBox = ({ searchTerm, onSearchChange }) => {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };
  return (
    <div>
      <Formik>
        <Form>
          <label>
            <p>Find contacts by name</p>
            <Field
              type="text"
              placeholder="Enter text to search"
              value={searchTerm}
              onChange={handleChange}
            />
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;
