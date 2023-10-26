import axios from "axios";

export const apiConfig = axios.create({
  baseURL: "localhost:3000",
});
