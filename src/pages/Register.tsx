import React, { useState } from "react";
import "../Login.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passswordConfirm, setPassswordConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);

  let navigate = useNavigate();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    await axios.post("http://localhost:8000/api/register", {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirm: passswordConfirm,
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <main className="form-signin">
      <form onSubmit={onSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>
        <input
          className="form-control"
          placeholder="First Name"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          className="form-control"
          placeholder="Last Name"
          required
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password Confirm"
          required
          onChange={(e) => setPassswordConfirm(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Register;
