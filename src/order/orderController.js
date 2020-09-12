const orderService = require('../order/orderService')

const getAllOrder = async (req, res) => {
    console.log(req.query);
    const { data, metadata } = await orderService.getAll(req.pagination)
    res.send({
        status: 1,
        data,
        metadata,
    })
}

const getOrderById = async (req, res) => {
    const { id } = req.params;
    const { data } = await orderService.getOrderById(id);
    res.send({
        status: 1,
        data
    })
}

const createOrder = async (req, res) => {
    await orderService.createOrder(req.body)
    res.send({
        status: 1,
    })
}

const updateOrder = async (req, res) => {
    const { id } = req.params;
    await orderService.updateOrderById(id, req.body)
    res.send({
        status: 1,
    })
}

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    await orderService.deleteOrderById(id)
    res.send({
        status: 1,
    })
}

module.exports = {
    getAllOrder,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
}