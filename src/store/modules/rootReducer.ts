import { combineReducers } from "redux";

import auth from "./auth/reducer";
import { StoreStateProps } from "../createStore";

export default combineReducers<StoreStateProps>({
  auth,
});
