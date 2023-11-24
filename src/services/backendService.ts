import axios from "axios";
import { IWordSpelling } from "../interfaces/wordInterfaces";

const api = axios.create({
  baseURL: "https://transcripton-1730885afe9f.herokuapp.com/custom-word",
});

const token = JSON.parse(localStorage.getItem("token") || "")

export const getAllWords = async () => {
  console.log(token, 'aq')

  const words = await api.get("/get-all", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return words;
};

export const createWord = async (from: string, to: string ) => {
  await api.post(
    "/create",
    { from, to },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const deleteWord = async (id: number ) => {
  await api.delete(`/delete-one/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getOneWord = async (id: number ) => {
  const word = await api.get(`/get-one/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return word;
};

export const updateWord = async (
  id: number,
  from: string,
  to: string
  
) => {
  await api.put(
    `/update-one/${id}`,
    { from, to },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
