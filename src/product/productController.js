const productService = require('../product/productService')

const getAllProduct = async (req, res) => {
    const { data, metadata } = await productService.getAllProduct(req.pagination);
    res.send({
        status: 1,
        metadata,
        data,
    })
}
const getProductById = async (req, res) => {
    const { id } = req.params;
    const { data } = await productService.getProductById(id);
    res.send({
        status: 1,
        data,
    })
}
const createProduct = async (req, res) => {
    await productService.createProduct(req.body)
    res.send({
        status: 1,
    })
}
const updateProduct = async (req, res) => {
    const { id } = req.params;
    await productService.updateProductById(id, req.body);
    res.send({
        status: 1,
    })
}
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await productService.deleteProductById(id);
    res.send({
        status: 1,
    })
}

module.exports = {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}