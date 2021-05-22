import React, { useRef } from 'react'
import {Form} from '@unform/web'
import './styles/global.css';
import Input from './components/Form/input';


function App() {

  const formRef = useRef(null)

  function handleSubmit(data, {reset}){

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
    console.log(data)
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
              type="email" 
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
