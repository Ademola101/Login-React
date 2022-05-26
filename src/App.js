import "./styles.css";
import { useState } from "react";
import LoginForm from "./components/LoginForm";

export default function App() {
  const [error, setError] = useState("");

  const [user, setUser] = useState({
    name: "",
    password: ""
  });

  const Login = (details) => {
    console.log(details);
  };

  const logOut = () => {
    console.log("logout");
  };

  const adminUser = {
    name: "Ademola",
    password: "123456"
  };

  return (
    <>
      {user.name !== "" ? (
        <div>
          Hello welcome user
          <div> Logout </div>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </>
  );
}
