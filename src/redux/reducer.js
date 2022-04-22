import * as types from './actionTypes';

const inicialState ={
    empresas:[],
    loading: false,
    error: null

};

const empresasReducer = (state = inicialState, action)=>{
    switch(action.type){
        case types.GET_EMPRESAS_START:
        case types.POST_EMPRESA_START:
        case types.DELETE_EMPRESA_START:
        case types.UPDATE_EMPRESA_START:
            return{
                ...state,
                loading:true
            };
        case types.GET_EMPRESAS_SUCCESS:
            return{
                ...state,
                loading: false,
                empresas: action.payload,
            };
        case types.POST_EMPRESA_SUCCESS:
        case types.UPDATE_EMPRESA_SUCCESS:
            return{
                ...state,
                loading: false,
            }
        case types.DELETE_EMPRESA_SUCCESS:
            return{
                ...state,
                loading: false,
                empresa: state.empresas.filter((item) => item.id !== action.payload )
            }
        case types.GET_EMPRESAS_ERROR:
        case types.POST_EMPRESA_ERROR:
        case types.DELETE_EMPRESA_ERROR:
        case types.UPDATE_EMPRESA_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default empresasReducer;