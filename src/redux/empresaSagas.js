import {take, takeEvery, takeLatest, put, all, delay, fork, call} from 'redux-saga/effects';
import * as types from './actionTypes';
import {getEmpresasSuccess, getEmpresasError, postEmpresaError, postEmpresaSuccess, deleteEmpresaSuccess, deleteEmpresaError, updateEmpresaError, updateEmpresaSuccess }from './actions';
import { getEmpresasApi, postEmpresaApi, deleteEmpresaApi, updateEmpresaApi } from './api';


function* onLoadEmpresasStartAsync(){
    try{
        const response = yield call(getEmpresasApi);
        if(response.status === 200){
            yield put(getEmpresasSuccess(response.data))
        }
    }catch(error){
        yield put(getEmpresasError(error.response.data))
    }
}

function* onPostEmpresasStartAsync({payload}){
    try{
        const response = yield call(postEmpresaApi, payload);
        if(response.status === 201){
            yield put(postEmpresaSuccess(response.data))
        }
    }catch(error){
        yield put(postEmpresaError(error.response.data))
    }
}
function* onDeleteEmpresaStartAsync(empresaId){
    try{
        const response = yield call(deleteEmpresaApi, empresaId);
        if(response.status === 200){
            yield put(deleteEmpresaSuccess(empresaId))
        }
    }catch(error){
        yield put(deleteEmpresaError(error.response.data))
    }
}
function* onUpdateEmpresasStartAsync({payload: {id, formValue}}){
    try{    
        const response = yield call(updateEmpresaApi, id, formValue);
        if(response.status === 200){
            yield put(updateEmpresaSuccess());
        }
    }catch(error){
        yield put(updateEmpresaError(error.response.data))
    }
}
function* onDeleteEmpresa(){
    while(true){
        const {payload: empresaId} = yield take(types.DELETE_EMPRESA_START)
        yield call(onDeleteEmpresaStartAsync, empresaId);
    }
}
function* onLoadEmpresas(){
    yield takeEvery(types.GET_EMPRESAS_START, onLoadEmpresasStartAsync)
}

function* onPostEmpresas(){
    yield takeLatest(types.POST_EMPRESA_START, onPostEmpresasStartAsync)
}

function* onUpdateEmpresas(){
    yield takeLatest(types.UPDATE_EMPRESA_START, onUpdateEmpresasStartAsync)
}

const empresaSagas = [
    fork(onLoadEmpresas),
    fork(onPostEmpresas),
    fork(onDeleteEmpresa),
    fork(onUpdateEmpresas)
]

export default function *rootSaga(){
    yield all([...empresaSagas])
}