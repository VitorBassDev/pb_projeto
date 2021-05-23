import React, { useRef } from 'react'
import { Link, useHistory} from 'react-router-dom'
import {Form} from '@unform/web'
import Input from '../components/Form/input';
import * as Yup from 'yup'
import api from '../services/apiPetBooking'
import swal from 'sweetalert'

function Login() {

  const formRef = useRef(null)
  const history = useHistory(); 

  async function handleSubmit(data, {reset}){

    try{    
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um email válido ')
          .required('Campo EMAIL Obrigatório'),
        password: Yup.string()
          .min(6, 'No mínimo 6 caracteres')
          .required('Campo PASSWORD Obrigatório')
        
        })

        await schema.validate(data, {
          abortEarly: false
        })

        console.log(data)
        formRef.current.setErrors({})

      } catch(err){
        if(err instanceof Yup.ValidationError){
          console.log(err)
          const errorsMessages = {

          }

          err.inner.forEach(error => {
            errorsMessages[error.path] = error.message
          })
          formRef.current.setErrors(errorsMessages)
        }
      }
      try {
        const response = await api.post(`sessions`, data)
        console.log(response.data.authentication_token)
        await history.push('/wellcome')

        localStorage.setItem('token', response.data.authentication_token); 
        localStorage.setItem('nome', response.data.name); 
        
      } catch (err) {
        console.log(err)
        swal({
          title: "Erro no Login",
          text: "Verifique a comunicação com a API",
          icon: "warning",
          button: "Tentar Novamente!",
          }); 
        }
    }

  return (
    <>
      <div  className="App">
      <h1 className="text-primary text-center mt-2 mb-4"> Login </h1>
      
        <Form ref={formRef} onSubmit={handleSubmit}>

          <div class="form-group">
            
            <label 
              for="InputEmail" 
              class="text-primary"> * Endereço de email
            </label>
            <Input 
              
              name="email" 
              class="form-control" 
              id="InputEmail" 
              placeholder="email@exemplo.com"/>
           
            <label 
              for="InputPassword" 
              class="text-primary"> * Senha 
            </label>
            <Input 

              type="password" 
              name="password" 
              class="form-control" 
              id="InputPassword" 
              placeholder="*********"/>

            <div className="AlertCampos">
              <span className="text-warning">* Campos Obrigatórios</span>
            </div>
            <button type="submit" class="btn btn-primary mt-4">Entrar</button>
            
          </div>
        </Form>

        <div className="Cadastro">
          <label > 
              <Link to="singup">Realizar Cadastro</Link>
          </label>
        </div>
    </div>
    </>
  );
}

export default Login;