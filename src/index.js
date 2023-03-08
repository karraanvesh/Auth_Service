const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');

const apiRoutes = require('./routes/index');

const UserService = require('./services/user_service');

const app = express();

const prepareAndStartServer = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api' , apiRoutes);
    
    app.listen(PORT , () => {
        console.log(`Server Started on Port: ${PORT}`);

        // const service = new UserService();
        // const newToken = service.createToken({email: 'anvesh@admin.com' , id: 1});
        // console.log('new token is',newToken);

        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudmVzaEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjc4MjU2NTE0LCJleHAiOjE2NzgyNTY1NDR9.5pYoyxWVjrhKW4_92SwI4uJtyQ3EhgLERKIk-k-es1Q";
        // const response = service.verifyToken(token);
        // console.log(response);
    });
}

prepareAndStartServer();