import React from "react";
import styles from "./LoginForm.module.css";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";

const LoginForm = () => {
  const {setUser} = React.useContext(UserContext)

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    setUser(data.get("email"))
  }
  return (
    <section className={`${styles.login} animeLeft`}>
      <h1 className="title">Tela de Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          margin="normal"
          label="Email/Usuário"
          id="email"
          name="email"
          fullWidth
        />
        <Input
          margin="normal"
          label="Password"
          id="password"
          name="password"
          fullWidth
          type="password"
        />

        <Button>Enviar</Button>
      </form>

      <h2>Não tem uma conta?</h2>
      <Link to="/login/create">
        <Button>Cadastre-se</Button>
      </Link>

      <Link to="/login/forgot">
        <h5>Esqueceu a senha? Clique aqui!</h5>
      </Link>
    </section>
  );
};

export default LoginForm;
