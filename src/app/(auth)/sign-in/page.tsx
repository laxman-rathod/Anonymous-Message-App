"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SignIn = () => {
  return (
    <div>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );
};

export default SignIn;
