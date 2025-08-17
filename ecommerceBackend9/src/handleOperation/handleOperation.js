import axios from "axios";

export const handleGetOperation = async (url) => {
   console.log("here is fetch Url",url)
  const result = await axios.get(url, { withCredentials: true });

  return result;
};

export const handlePostOperation = async (url, data) => {
  console.log("post upeorationURL is", url);
  const result = await axios.post(url, data, { withCredentials: true });
  return result;
};

export const handleDeleteOperation = async (url) => {
  const result = await axios.delete(url, { withCredentials: true });
  return result;
};

