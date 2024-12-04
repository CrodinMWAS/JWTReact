import { FormEvent, useState } from "react";
import { authUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { ROUTER_DATA } from "../App";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const sendLoginRequest = (e: FormEvent) => {
    e.preventDefault();
    authUser(username, password).then((res) => {
      if (!res) return;
      localStorage.setItem("access", res.access);
      localStorage.setItem("refresh", res.refresh);

      nav(ROUTER_DATA.homePage.path);
    });
  };
  return (
    <div>
      <form action="LoginPage" onSubmit={sendLoginRequest}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="pwrd"
          id="pwrd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
