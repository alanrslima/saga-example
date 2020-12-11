import { action } from "typesafe-actions";

interface SignInRequestProps {
  email: string;
  password: string;
}
export function signInRequest({ email, password }: SignInRequestProps) {
  return action("@auth/SIGN_IN_REQUEST", {
    email,
    password,
  });
}

interface SignInSuccessProps {
  token: string;
}
export function signInSuccess({ token }: SignInSuccessProps) {
  return action("@auth/SIGN_IN_SUCCESS", {
    token,
  });
}

export function signInFailure() {
  return action("@auth/SIGN_IN_FAILURE");
}
