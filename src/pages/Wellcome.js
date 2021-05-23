import React from 'react'
import { Link, useHistory } from "react-router-dom";
import swal from 'sweetalert'
import api from '../services/apiPetBooking'

function Wellcome() {

  const history = useHistory(); 
  const token   = localStorage.getItem('token');

  async function handleLogout(){  
    try {
      const response = await api.post(`sessions`, token)
      console.log(response.data.authentication_token)
      localStorage.clear();
      await history.push('/')
    
    } catch (err) {
      console.log(err)
      swal({
        title: "Erro de comunicação com a API!",
        icon: "warning",
        button: "Tentar Novamente!",
        }); 
      }
    }

  return (
    <>
      <div  className="App">
        <p> Seja bem Vindo `Nome do usuário`</p>
        <Link
         onClick={handleLogout}>    Fazer Lougout
         </Link>
    </div>
    </>
  );
}

export default Wellcome;