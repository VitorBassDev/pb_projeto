import React, { useRef } from 'react'
import {Form} from '@unform/web'
import './styles/global.css';
import Input from './components/Form/input';
import * as Yup from 'yup'


function App() {

  const formRef = useRef(null)

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
    }
  
  
  return (
    <>
    
    <div className="container">
      <div  className="App">

        <Form ref={formRef} onSubmit={handleSubmit}>

          <div class="form-group">
            <label 
              for="InputEmail" 
              class="text-info"> Endereço de email 
            </label>

            <Input 
              
              name="email" 
              class="form-control" 
              id="InputEmail" 
              placeholder="email@exemplo.com"/>
           
            <label 
              for="InputPassword" 
              class="text-info"> Endereço de email 
            </label>

            <Input 
              type="password" 
              name="password" 
              class="form-control" 
              id="InputPassword" 
              placeholder="*********"/>

            <button type="submit" class="btn btn-info mt-4">Enviar</button>
            
          </div>

        </Form>

      </div>
    </div>

    </>
  );
}

export default App;

    // if(data.email === "" && data.password === ""){
    //   formRef.current.setErrors({
    //     email: 'O Email é Obrigatório',
    //     password: 'Senha Obrigatória'
        
    //   })
    // }
    //   else if (data.email === ""){
    //     formRef.current.setErrors({
    //       password: 'Email Obrigatório'
    //     })
    //   }

    //   else if (data.password === ""){
    //     formRef.current.setErrors({
    //       password: 'Senha Obrigatória'
    //     })
    //   }

    // else{
    //   console.log(data)
    //   reset()
    //   //reset(formRef)
    // }
