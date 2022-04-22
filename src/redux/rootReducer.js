import {combineReducers} from "redux";

import empresasReducer from "./reducer";
const rootReducer =  combineReducers({
    data: empresasReducer,
})

export default rootReducer;