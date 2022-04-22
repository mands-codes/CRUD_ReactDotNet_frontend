import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

//import logger from "redux-logger";
import rootReducer from './rootReducer';
import rootSaga from "./empresaSagas";

const sagaMiddleware = createSagaMiddleware();


const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;