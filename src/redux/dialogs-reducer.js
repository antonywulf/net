const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Liza' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Max' },
    { id: 5, name: 'Misha' },
  ],
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your study?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = newMessageBody => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
