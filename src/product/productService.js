const db = require('../utils/db')

const getAllProduct = async ({ limit, offset }) => {
    const sql = `SELECT productId, display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId, created_at, updated_at FROM product WHERE isDelete = 0 LIMIT ? OFFSET ?;`
    const data = await db.queryMulti(sql, [limit, offset]);
    const countSql = `SELECT count (productId) as total FROM product;`;
    const { total } = await db.queryOne(countSql);
    return {
        data,
        metadata: {
            length: data.length,
            total
        }
    }
}

const getProductById = async (id) => {
    const sql = `SELECT productId, display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId, created_at, updated_at FROM product WHERE isDelete = 0 AND productId = ?;`
    return await db.queryOne(sql, [id]);
}

const createProduct = async ({ display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId }) => {
    const sql = `INSERT INTO product(productId, display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId) VALUES(uuid(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
    return await db.query(sql, [display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId])
}

const updateProductById = async (productId, { display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId }) => {
    const sql = `UPDATE product SET display = ?, provider = ?, description = ?, imageUrl = ?, priceIn = ?, priceOut = ?, priceSale = ?, shipday = ?, instock  = ?, status = ?, categoryId  = ? WHERE productId = ? AND isDelete = 0;`
    return await db.query(sql, [display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId, productId])
}

const deleteProductById = async (id) => {
    const sql = `UPDATE product SET isDelete = 1 WHERE productId = ?;`
    return await db.query(sql, [id]);
}

const getAllProductId = async () => {
    const sql = `SELECT productId, display FROM product WHERE isDelete = 0;`
    const data = await db.queryMulti(sql);
    return {
        data,
        metadata: {
            length: data.length,
        }
    }
};

module.exports = {
    getAllProduct,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById,
    getAllProductId
}
