import axios from "axios";

const API_URL = "http://localhost:5000/api/form/submit";

export const submitForm = (formData) => {
  return axios.post(API_URL, formData);
};
