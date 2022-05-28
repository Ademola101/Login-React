import "./styles.css";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import welcomePage from "./components/welcomepge";
export default function App() {
  const [error, setError] = useState("");

  const [user, setUser] = useState({
    name: "",
    password: ""
  });

  const Login = (details) => {
    if (details.email === adminUser.email && details.password === "123456") {
      setUser({
        name: details.name,
        email: details.email,
        password: details.password
      });
    } else {
      setError("Details do not match");
    }
  };

  const logOut = () => {
    setUser({
      name: "",
      password: "",
      email: ""
    });
  };

  const adminUser = {
    name: "Ademola",
    email: "ade@mola",
    password: "123456"
  };

  return (
    <>
      {user.name !== "" ? (
        <welcomePage logOut={logOut} />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </>
  );
}
