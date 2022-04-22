import Menu from './components/Menu';
import FormEmpresa from './components/FormEmpresa';
import ListarEmpresas from './components/ListarEmpresas';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
  
      <Router>
          <Menu />
              <Routes>
                <Route exact path='/' element={<ListarEmpresas/>}/>
                <Route path='/editEmpresa/:id' element={<FormEmpresa/>}/>
                <Route path='/cadastrar' element={<FormEmpresa/>}/>
              </Routes>
              <ToastContainer />
        </Router>
        

  
  );
}

export default App;
