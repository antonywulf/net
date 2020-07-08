import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 1, message: "It's my first post", likesCount: 11 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your study?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
      ],
      dialogsData: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Liza' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Max' },
        { id: 5, name: 'Misha' },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('Rerender');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
