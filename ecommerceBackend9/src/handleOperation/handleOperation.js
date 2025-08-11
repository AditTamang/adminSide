import axios from "axios";

// const BASE_URL = "http://localhost:4000/api/";

export const handeGetOperation = async (url) => {
  const result = await axios.get(url, { withCredentials: true });
  console.log(result);
  return result.data.data;
};

export const handlePostOperation = async (url, data) => {
  const result = await axios.post(url, data, { withCredentials: true });
  return result.data;
};
