import axios from 'axios';


export const getEmpresasApi = async () => {
    return await axios.get("http://localhost:27186/api/Empresas");

};

export const postEmpresaApi = async (empresa) => {
    return await axios.post("http://localhost:27186/api/Empresas", empresa);

};

export const deleteEmpresaApi = async (empresaId) => {
    return await axios.delete(`http://localhost:27186/api/Empresas/${empresaId}`);

};

export const updateEmpresaApi = async (empresaId, empresa) => {
    return await axios.put(`http://localhost:27186/api/Empresas/${empresaId}`, empresa);

};