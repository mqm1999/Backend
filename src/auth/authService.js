const db = require('../utils/db');
const security = require('../utils/security');

const login = async (user) => {
    const getUserSQL = `SELECT username, password FROM account WHERE username = ? LIMIT 1;`;
    const result = await db.queryOne(getUserSQL, [user.username])
    const compare = await security.verifyPassword(user.password, result.password);
    if (compare) {
        return security.generateToken({
            username: user.username,
            role: user.role // create thi day role len cung`
        })
    } else {
        return false;
    }
};

module.exports = {
    login
};