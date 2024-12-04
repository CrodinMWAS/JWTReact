import { Profile } from "../pages/HomePage";

const BASE_URL = "https://ln1zk6gl-8000.euw.devtunnels.ms/";

type TokenResponse = {
  refresh: string;
  access: string;
};

export const authUser = async (username: string, password: string) => {
  try {
    const res = await fetch(`${BASE_URL}api/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data: TokenResponse = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const hasToken = (): boolean => {
  return (
    localStorage.getItem("access") != null &&
    localStorage.getItem("refresh") != null
  );
};

export const getUserData = async () => {
  try {
    const res = await fetch(`${BASE_URL}api/userProfile`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    const data: Profile = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
