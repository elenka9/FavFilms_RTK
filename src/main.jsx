// подключаем store и persistor, чтобы приложение сохраняло данные в хранилище
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store.js";
// PersistGate позволяет приложению ожидать восстановления состояния из хранилища перед рендером
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
