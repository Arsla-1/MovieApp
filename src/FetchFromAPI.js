import axios from "axios";

const Base_URL = "https://moviesdatabase.p.rapidapi.com/titles";

const options = {
  url: Base_URL,
  headers: {
    "X-RapidAPI-Key": "1d5f3f84d3msh2641af851d54b69p10d407jsn0eed17ff5dd1",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

export const FetchFromAPI = async (url) => {
  const { data } = await axios.get(`${Base_URL}/${url}`, options);
  return data;
};
