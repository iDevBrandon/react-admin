import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [user, setUser] = useState({
    first_name: "",
  });
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("users", {
        withCredentials: true,
      });

      setUser(data);
    })();
  }, []);

  const onClick = async () => {
    await axios.post("logout", {});
  };

  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">
        Company name
      </a>

      <ul className="my-2 my-md-0 mr-md-3">
        <Link to="/profile">{user?.first_name}</Link>
        <a className="p-2 text-white" href="/" onClick={onClick}>
          Sign out
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
