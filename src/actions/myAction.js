import { ADD } from "../actionTypes/actionTypes";

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

export { addMessage };
