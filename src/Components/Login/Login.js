import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase";
import LoginContainer, { LoginInnerContainer } from "./Login.style";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt="Slack"
        />

        <h1>SIgn In TO Slack</h1>
        <p>slack.com</p>
        <Button onClick={signIn}>SIgn In with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
