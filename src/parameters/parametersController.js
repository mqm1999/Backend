const categoryService = require('../category/categoryService')
const productService = require('../product/productService')
const orderService = require('../product/productService')

const getAllCategoryId = async (req, res) => {
    console.log(req.pagination);
    const { data, metadata }
        = await categoryService.getAllId()
    res.send({
        status: 1,
        data,
        metadata,
    })
}
const getAllProductId = async (req, res) => {
    console.log(req.pagination);
    const { data, metadata }
        = await productService.getAllId();
    res.send({
        status: 1,
        data,
        metadata,
    })
}
const getAllOrderId = async (req, res) => {
    console.log(req.pagination);
    const { data, metadata } = await orderService.getAllId();
    res.send({
        status: 1,
        data,
        metadata,
    })
}

module.exports = {
    getAllCategoryId,
    getAllProductId,
    getAllOrderId
}
