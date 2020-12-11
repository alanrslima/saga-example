import { AuthStateProps, AuthActionsProps } from "./types";

const INITIAL_STATE: AuthStateProps = {
  loadingSignInRequest: false,
  errorSignInRequest: false,
  isSignedIn: false,
  token: null,
};

export default function auth(
  state = INITIAL_STATE,
  action: AuthActionsProps
): AuthStateProps {
  switch (action.type) {
    case "@auth/SIGN_IN_REQUEST":
      return {
        ...state,
        loadingSignInRequest: true,
      };
    case "@auth/SIGN_IN_SUCCESS":
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true,
        token: action.payload.token,
        errorSignInRequest: false,
      };
    case "@auth/SIGN_IN_FAILURE":
      return {
        ...state,
        loadingSignInRequest: false,
        errorSignInRequest: true,
      };
    default:
      return state;
  }
}
