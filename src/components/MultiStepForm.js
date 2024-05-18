import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

const MultiStepForm = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    mobileno: "",
  });

  const nextForm = () => setPage(page + 1);
  const prevForm = () => setPage(page - 1);

  const submitForm = () => {
    console.log("Form submitted", formData);
  };
  switch (page) {
    case 1:
      return (
        <Form1
          nextForm={nextForm}
          setFormData={setFormData}
          formData={formData}
        />
      );
    case 2:
      return (
        <Form2
          nextForm={nextForm}
          prevForm={prevForm}
          setFormData={setFormData}
          formData={formData}
        />
      );
    case 3:
      return (
        <Form3
          prevForm={prevForm}
          setFormData={setFormData}
          formData={formData}
          submitForm={submitForm}
        />
      );
    default:
      return null;
  }
};

export default MultiStepForm;
