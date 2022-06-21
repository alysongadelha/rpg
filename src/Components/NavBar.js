import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import style from "./NavBar.module.css";

const NavBar = () => {
  const { user } = React.useContext(UserContext);
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link to="/">Home</Link> ||{" "}
        {user ? (
          <Link to="/login">{user}</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
