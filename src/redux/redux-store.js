// Импортируем extra - функции из redux
import { applyMiddleware, combineReducers, createStore } from 'redux';
// Импортируем все наши редьюсеры
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
// Импортируем промежуточное ПО (для санок)
import thunkMiddleware from 'redux-thunk';
// Импортируем особенный редьюсер из redux-form для работы со всеми формами
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';

// Комбинируем редьюсеры
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  // Именно form (для redux-form)
  form: formReducer,
});

// Создаем STORE из редьюсеров, добавляем промежуточное ПО
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// for testing
window.store = store;

export default store;
