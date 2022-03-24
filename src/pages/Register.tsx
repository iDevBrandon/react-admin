import React, { useState } from "react";
import "../Login.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passswordConfirm, setPassswordConfirm] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      password,
      passswordConfirm,
    });
  };

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
