import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export const ROUTER_DATA = {
  homePage: { path: "/", title: "Home", element: <HomePage /> },
  loginPage: { path: "/login", title: "Login", element: <LoginPage /> },
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTER_DATA.loginPage.path}
          element={ROUTER_DATA.loginPage.element}
        ></Route>
        <Route
          path={ROUTER_DATA.homePage.path}
          element={ROUTER_DATA.homePage.element}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
