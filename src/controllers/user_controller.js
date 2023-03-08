const UserService = require('../services/user_service');

const userService = new UserService();
const create = async (req, res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });

        return res.status(201).json({
            message: 'Successfully created a new user',
            success: true,
            data: response,
            error: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            success: false,
            data: {},
            error: error
        });
    }
}

const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(req.body.email , req.body.password);
        return res.status(200).json({
            message: 'Successfully signed in',
            success: true,
            data: response,
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            success: false,
            data: {},
            error: error
        });
    }
}

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const result = await userService.isAuthenticated(token);
        return res.status(200).json({
            success : true ,
            err: {},
            data : result,
            message: 'user is authenticated and token is valid'
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            success: false,
            data: {},
            error: error
        });
    }
}

module.exports = {
    create ,
    signIn ,
    isAuthenticated
}