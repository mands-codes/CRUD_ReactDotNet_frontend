import * as types from './actionTypes';

export const getEmpresasStart = () => ({
    type: types.GET_EMPRESAS_START,
});

export const getEmpresasSuccess = (empresas) => ({
    type: types.GET_EMPRESAS_SUCCESS,
    payload: empresas,
});

export const getEmpresasError = (error) => ({
    type: types.GET_EMPRESAS_ERROR,
    payload: error,
});

export const postEmpresaStart = (empresa) => ({
    type: types.POST_EMPRESA_START,
    payload: empresa,
});

export const postEmpresaSuccess = () => ({
    type: types.POST_EMPRESA_SUCCESS,
});

export const postEmpresaError = (error) => ({
    type: types.POST_EMPRESA_ERROR,
    payload: error,
});

export const deleteEmpresaStart = (empresaId) => ({
    type: types.DELETE_EMPRESA_START,
    payload: empresaId,
});

export const deleteEmpresaSuccess = (empresaId) => ({
    type: types.DELETE_EMPRESA_SUCCESS,
    payload: empresaId,
});

export const deleteEmpresaError = (error) => ({
    type: types.DELETE_EMPRESA_ERROR,
    payload: error,
});

export const updateEmpresaStart = (empresaInfo) => ({
    type: types.UPDATE_EMPRESA_START,
    payload: empresaInfo,
});

export const updateEmpresaSuccess = (empresaInfo) => ({
    type: types.UPDATE_EMPRESA_SUCCESS,
});

export const updateEmpresaError = (error) => ({
    type: types.UPDATE_EMPRESA_ERROR,
    payload: error,
});