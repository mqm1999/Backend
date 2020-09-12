const db = require('../utils/db')
const security = require('../utils/security')

const create = async (newAccount) => {
    const checkExistSQL = `SELECT count(username) as c FROM accocunt WHERE username = ?;`;
    const exist = await db.queryOne(checkExistSQL, [newAccount.username]);
    if (exist.c > 0) {
        return 'existed'
    } else {
        const encryptedPassword = await security.generatePassword(newAccount.password)
        console.log(encryptedPassword);
        const insertSQL = `INSERT INTO account(username, password) VALUES (? , ?);`;  // tao them cac truong
        await db.query(insertSQL, [newAccount.username, encryptedPassword]);
        return 'Success';
    }
}

module.exports = {
    create
}