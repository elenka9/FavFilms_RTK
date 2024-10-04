// configureStore это функция из библиотеки для создания хранилища с предварительно настраиваемыми параметрами
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //Используем localStorage По умолчаию
import favoriteMoviesReducer from "../movie/favoriteMoviesSlice";

// объект для настройки сохранения состояния хранилища
const persistConfig = {
  key: "root", // ключ, под которым будет сохранено состояние
  storage, // место, где будет храниться состояние
};

// создаем редьюсер, который автоматически сохраняет состояние
const persistedReducer = persistReducer(persistConfig, favoriteMoviesReducer);

//создаем хранилище, в котором будет храниться редьюсер с именем favoriteMoves
const store = configureStore({
  reducer: {
    favoriteMovies: persistedReducer,
  },
});

// persistStore создает объект persistor для управления процессом сохранением и восстановлением состояния
export const persistor = persistStore(store);
export default store;
