const accountService = require('../account/accountService');
const security = require('../utils/security');

const create = async (newAccount) => {
    console.log('tao moi tai khoan', newAccount);
    if(!newAccount.username || newAccount.password.length < 6){
        const result = {
            status: 0,
            message: 'Cant be blank'
        };
        return result
    }
    const encryptedPassword = await security.generatePassword(newAccount.password)
    return accountService.create(newAccount);

    
}

module.exports = {
    create
}