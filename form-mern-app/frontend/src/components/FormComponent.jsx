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
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          style={styles.input}
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          type="email"
          required
          style={styles.input}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          style={{ ...styles.input, height: "120px", resize: "none" }}
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

// Add hover effect manually:
styles.button["&:hover"] = {
  backgroundColor: "#45a049",
};

export default FormComponent;
