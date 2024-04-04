import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LogInUser = () => {
    fetch(`http://localhost:3000/Restaurant?q=${name}&password=${password}`)
      .then((result) => result.json())
      .then((resp) => {
        if (resp.length > 0) {
            localStorage.setItem('login',JSON.stringify(resp))
          console.warn(navigate("/list"));
        } else {
          alert("please check username");
        }
      });
  };

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={LogInUser}>Login</button>
    </>
  );
};

export default Login;
