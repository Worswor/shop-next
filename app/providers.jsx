"use client";

import { Provider } from "react-redux";
import store from "../redux/store";

/// This component wraps the parts pf the application
/// that need access to the Redux store.
/// It uses the Provider component from react-redux to make the store available to all child components.
export default function Providers({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}