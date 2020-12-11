import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type AuthActionsProps = ActionType<typeof actions>;

export interface AuthStateProps {
  readonly loadingSignInRequest: boolean;
  readonly isSignedIn: boolean;
  readonly errorSignInRequest: boolean;
  readonly token: string | null;
}
