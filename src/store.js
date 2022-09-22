import { createStore } from "redux";
import messageReducer  from "./reducers/myReducer";

const store = createStore(messageReducer);

export default store;
