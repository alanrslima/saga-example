import { createStore, applyMiddleware, Reducer, Middleware } from "redux";
import { AuthActionsProps, AuthStateProps } from "./modules/auth/types";

export interface StoreStateProps {
  auth: AuthStateProps;
}

export type StoreActionProps = AuthActionsProps;

const Store = (
  reducers: Reducer<StoreStateProps, StoreActionProps>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};

export default Store;
