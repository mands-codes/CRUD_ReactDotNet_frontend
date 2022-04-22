import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import {useDispatch, useSelector} from "react-redux";
import { postEmpresaStart, updateEmpresaStart } from '../../redux/actions';
import {  toast } from 'react-toastify';
import './style.css';

const initialState = {
  razaoSocial: "",
  cnpj: "",
  nomeFantasia: "",
  email: "",
  telefone: ""
}

function FormEmpresa(){
  const [formValue, setFormValue] = useState(initialState);
  const [modoEdicao, setModoEdicao] = useState(false);
  const {razaoSocial, cnpj, nomeFantasia, email, telefone } = formValue;
  const  empresas   = useSelector(state => state.data.empresas);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  
  useEffect(() =>{ 
    if(id){
        setModoEdicao(true);
        const empresaSelecionada = empresas.find(item=> item.id === Number(id));
        setFormValue(empresaSelecionada);
    }
  },[id, empresas]);

  //const [erros, setErros] = useState({}); 
  var erro = false;
 
    if(cnpj.length < 5){
     // erros.cnpj = "CNPJ inválido";
      erro = true;
    }
    if(razaoSocial.length < 2){
     // erros.razaoSocial = "Mínimo 5 caracteres";
      erro = true;
    }
   // if(!email.includes("@") || !email.includes(".")){
  // erros.email = "Por favor, insira um e-mail válido"
     // erro = true;
    //}
    //if(telefone.length > 5 || telefone.length < 11){
     // erros.telefone = "Por favor, insira um telefone válido";
     // erro = true;
   // }
 
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(erro === true){
        toast.error("Alguns campos não estão corretos");
    }
    if(erro === false){
       if(modoEdicao === false){
            dispatch(postEmpresaStart(formValue));
            toast.success("Adicionado com Sucesso!");
           setTimeout(() => {
                navigate("/");
            }, 500);
       }else{
         
           dispatch(updateEmpresaStart({id, formValue}));
            setModoEdicao(false);
            toast.success("Editado com sucesso");
            setFormValue({...initialState});
            setTimeout(() => {
              navigate("/");
          }, 300);
       }
     }
  };

  const onInputChange = (e) =>{
    let {name, value} = e.target;

    setFormValue({...formValue, [name]: value});
  }
    return(
        <Container>
            <h3 className='text-center' style={{marginTop:"20px"}}>{!modoEdicao ?  "Cadastrar empresa" : "Edição de Empresa"}</h3>
        <Form onSubmit={handleSubmit} style={{marginLeft:"35%", marginTop:"28px"}}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="razaoSocial">
                Razão Social
              </Label>
              <Input
                id="razaoSocial"
                name="razaoSocial"
                value={razaoSocial} 
                type="text"
                onChange={onInputChange}
                required={true}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="cnpj">
                CNPJ
              </Label>
              <Input
                id="cnpj"
                name="cnpj"
                value={cnpj}
                type="text"
                onChange={onInputChange}
                required={true}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
           <FormGroup>
             <Label for="nomeFantasia">
               Nome Fantasia
              </Label>
             <Input
               id="nomeFantasia"
              name="nomeFantasia"
              value={nomeFantasia}
              type='text'
              onChange={onInputChange}
              required={true}
             />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
                <Label for="email">
                     E-mail
                </Label>
                <Input
                id="email"
                name="email"
                value={email}
                type="email"
                onChange={onInputChange}
                required={true}
                />
            </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            <FormGroup>
              <Label for="telefone">
                Telefone
              </Label>
              <Input
                id="telefone"
                name="telefone"
                value={telefone}
                type='number'
                onChange={onInputChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button 
            color='primary' 
            type='submit'
            style={{marginRight:"10px"}}>
        {!modoEdicao ? "Cadastrar" : "Editar"}
        </Button>
        <Button 
            color='danger' 
            onClick={()=>{
                if(window.confirm("Você tem certeza que deseja cancelar?")){
                    navigate("/")
                }
            }}>
              Cancelar
        </Button>
      </Form>
     </Container>
    );
}

export default FormEmpresa;