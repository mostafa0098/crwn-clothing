import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.scss";
export default function SingInAndSignUp() {
  return (
    <div className="sign-in-sign-up">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
}
