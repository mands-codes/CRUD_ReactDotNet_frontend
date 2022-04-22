import React, {Fragment, useEffect} from 'react';
import { Container, Table, Spinner, Button } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { getEmpresasStart, deleteEmpresaStart } from '../../redux/actions';
import MaterialIcon from 'material-icons-react'
import { Link } from "react-router-dom";

function ListarEmpresas(){

    const dispatch = useDispatch();
    const {empresas, loading} = useSelector(state=> state.data);
    

    useEffect(()=>{
        dispatch(getEmpresasStart());
    },[dispatch]);

    // if(loading){
    //     return(
    //         <Spinner cssModule={{marginTop: "150px", }}>
    //             <span className='visually-hidden'>Carregando...</span>
    //         </Spinner>
    //     )
    // }

    
  const handleDelete = (id) =>{
    if(window.confirm("Você tem certeza que deseja remover esta empresa?")){
        dispatch(deleteEmpresaStart(id));
        window.location.reload(); 
    }
  }


return(
 <Container>
     <h4 className='text-center' style={{marginTop:"20px", marginBottom:"24px"}}>Lista de Empresas</h4>
    <Table striped>
        <thead>
        <tr>
            <th scope="row">Nº</th>
            <th>Razão Social</th>
            <th>CNPJ</th>
            <th>Nome Fantasia</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Ações</th>
        </tr>
       </thead>
        <tbody>
        {console.log(empresas)}
        {empresas && empresas.map((item, index) => (
            
         <tr key={index}>
             <th scope="row">{index + 1}</th>
            <td>{item.razaoSocial}</td>
            <td>{item.cnpj}</td>
            <td>{item.nomeFantasia}</td>
            <td>{item.email}</td>
            <td>{item.telefone}</td>
            <td>
               <Link to={`/editEmpresa/${item.id}`}>
                <Button outline color='none'><MaterialIcon icon="edit" color={"#F9A825"} size="medium" id="ButtonDelete"></MaterialIcon></Button>
                </Link>
                <Button outline color='none' onClick={()=> handleDelete(item.id)}>
                    <MaterialIcon icon="delete" color={"#B71C1C"} size="medium" id="ButtonDelete"></MaterialIcon>
                </Button>
            </td>
         </tr>
         ))}
        </tbody>
    </Table>
 </Container>
);
}

export default ListarEmpresas;