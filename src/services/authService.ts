import axios from "axios";

const api = axios.create({
  baseURL: "https://transcripton-1730885afe9f.herokuapp.com/auth",
});

export const login = async (email: string, password: string) => {
  const user = await api.post("/login", { email, password });

  return user;
};

export const logout = async (token: string) => {
  console.log(token);

  await api.post("/logout", { headers: { Authorization: `Bearer ${token}` } });
};
