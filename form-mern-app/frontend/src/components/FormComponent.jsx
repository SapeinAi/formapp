import React, { useState } from "react";
import { submitForm } from "../services/formService";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitForm(formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
