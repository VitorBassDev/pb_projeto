## 💻 Projeto

Aplicação construida em REACT para consumir a API da [Pet Booking](https://petbooking.com.br/)

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes Tecnologias e Ferramentas:

- [JavaScrip](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript).
- [NodeJs](https://nodejs.org/en/).
- [ReactJs](https://pt-br.reactjs.org/).
- [Npm](https://www.npmjs.com/).
- [Unform](https://unform.dev/) Validação do Formulário.
- [Yup](https://www.npmjs.com/package/yup) Validação do Formulário.
- [SweetAlert](https://sweetalert.js.org/guides/) Alertas Estilizados.
- [Bootstrap](https://getbootstrap.com/) responsividade e estilização.
- [Axios](https://www.npmjs.com/package/axios) Biblioteca utilizada para consumir APIS.
- [VsCode](https://code.visualstudio.com/) Editor de código.
- [Linux](https://www.linux.org/) Sistema Operacional.

## 🚀 Como executar

1. Faça um Fork ou Download do Projeto.
2. Instale as dependências do projeto (`npm install || yarn install`).
3. Execute o projeto (`npm start`).
4. O Projeto será aberto no navegador.

## Estrutura do Projeto

pb_frontend 
.
├── README.md
├── jsconfig.json
├── package.json
├──.env.development
├── public
│   ├── favicon.ico
│   ├── index.html
├── src
│   ├── components
│   │   ├── Forms
│   │   │   ├── input.js.js
│   ├── pages
│   │   ├── Login.js
│   │   ├── Singin.js
│   │   ├── Wellcome.js
│   ├── services
│   │   ├── apiPetBooking.js
│   ├── styles
│   │   ├── global.css
│   ├── App.js
│   ├── index.js
│   ├── routes.js
├── 
│ 
.

## 🚧 Features

- [x] Página de Login com formulário(`Validações | Persistência de dados no localStorage`).
- [x] Página de Cadastro com formulário(`Validações`).
- [x] Página de Logout com (`Busca dados no localStorage`).
- [x] Validação de campos em branco e tipos de dados(`Utilização do Yup e UnForm`).
- [x] Serviço de comunicação com APIs externos (`Utilização do Axios`).
- [X] Implementação do **HEADERS** com a *X-Application-toke* passada.
- [x] Alerta de mensagens personalizadas (`Utilização do SweetAlert`).
- [x] Roteamento de paginas.

## 🚧 Features com problemas 
-  Comunicação efetiva com a API do PetBooking (`feature não funciona, retorna erro de **CORS** no navegador`).

## Melhorias
-  Implementação efetiva da API.
-  Desing do FrontEnd | Págians e Formulários(`estilização`).
-  Após o cadastro, criar sessão automática e redirecionar para a página de usuário logado.
-  Retornar as mensagens originárias do BACKEND.

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
By Vítor Guedes 👋🏻 [Linkedin](https://www.linkedin.com/in/vitor-guedes/).
