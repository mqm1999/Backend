const R = require('express').Router();
const accountController = require('../account/accountController')

// R.get('/me', (req, res, next) => {
//     res.send('get meF ok');
// })

// R.get('/:id', (req, res, next) => {
//     res.send('get id ok');
// })

R.post('/', (req, res, next) => {
    newAccount = {
        username: req.body.username,
        password: req.body.password
        // 123456 (=> hash) => encrypt => result => save to db
    }
    const result = accountController.create(newAccount)
    res.send(result);
})



module.exports = R