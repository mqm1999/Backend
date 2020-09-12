const authService = require('../auth/authService')
const login = async (req, res, next) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    // check dang nhap thanh cong that bai
    // const result = await authService.login(user)
    const result = false;
    if (result) {
        res.send({
            status: 1,
            token: result
        })
    } else {
        res.status(400); 
        res.send({
            status: 0,
            message: 'dang nhap that bai'
        })
    }
};

module.exports = {
    login
};