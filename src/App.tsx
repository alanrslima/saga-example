import React from "react";
import SignIn from "./pages/SignIn";
import { Provider } from "react-redux";
import { store } from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
};

export default App;
