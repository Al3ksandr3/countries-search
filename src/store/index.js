import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

export const reduxStore = createStore(rootReducer);
