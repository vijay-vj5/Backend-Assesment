
# Authentication API with Express and MongoDB

In this project, we will be creating authentication APIs using Express.js and MongoDB as the database. We will implement the following features:
Login: API endpoint to allow users to log in by providing their credentials (username/email and password). Upon successful login, a JWT token will be generated and returned to the client.

Signup: API endpoint to allow users to create a new account by providing necessary details such as name, email, and password. The user's information will be stored in the MongoDB database securely.
Protected Routes: We will create additional routes that require authentication. These routes will be protected using the authentication middleware to ensure only authenticated users can access them.

JWT Token: We will use JSON Web Tokens (JWT) to handle authentication. The JWT token will be generated upon successful login or signup and sent to the client. For protected routes, the token will be included in the request headers for authentication.




## Acknowledgements

 - [Nodejs](https://nodejs.org/en/docs/)
 - [Expressjs](https://expressjs.com/en/api.html)
 - [JWT](https://jwt.io/)
 - [MongoDB](https://docs.mongodb.com/manual/)
 - [Mongoose](https://mongoosejs.com/docs/)
 - [Postman](https://www.postman.com/docs/)


## Authors

- [Vijay R M](https://github.com/vijay-vj5)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Installation

Install my-project with 

```bash
  git clone my-project
  cd my-project
  npm install
  node filename.js
```
    
## Documentation

1. Start the API by running the command:
    ```
           node app.js 
    ```
2. Use a tool like Postman to test the API.    Here are some sample requests:

  - Register a new user:

       POST http://localhost:3000/api/auth/register

     {   
       "name": "John Doe",    
       "email": "johndoe@example.com",  
       "password": "password"  
     }

  - Authenticate user and log in:
   
      POST http://localhost:3000/api/auth/login

     {  
       "email": "johndoe@example.com",  
       "password": "password"  
     }
   
