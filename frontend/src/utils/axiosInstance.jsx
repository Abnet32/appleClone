import axios from "axios";
  const url = import.meta.env.VITE_url;

export const axiosInstance = axios.create({
  baseURL:url , 
});
