import React, { useState } from "react";

import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { StoreStateProps } from "../../store/createStore";
import { signInRequest } from "../../store/modules/auth/actions";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loadingSignInRequest } = useSelector(
    (state: StoreStateProps) => state.auth
  );

  const dispatch = useDispatch();

  function onClickOpenButton() {
    dispatch(signInRequest({ email: "joao@gmail.com", password: "123" }));
  }

  function onChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  return (
    <div className="sign-in-page">
      <div className="sign-in-content">
        <h2>Login</h2>
        <input
          type="email"
          name=""
          id=""
          value={email}
          onChange={onChangeEmail}
          placeholder="E-mail"
        />
        <input
          type="password"
          name=""
          id=""
          value={password}
          placeholder="Senha"
          onChange={onChangePassword}
        />
        <button disabled={loadingSignInRequest} onClick={onClickOpenButton}>
          {loadingSignInRequest ? "Carregando" : "Entrar"}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
