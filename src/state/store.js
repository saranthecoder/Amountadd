import { applyMiddleware, createStore } from "redux"
import reducres from "./reducres"
import thunk from "redux-thunk"

export const  store = createStore(reducres,{},applyMiddleware(thunk))