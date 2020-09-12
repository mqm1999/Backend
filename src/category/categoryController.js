const categoryService = require('../category/categoryService')

const getAllCategory = async (req, res) => {
    console.log(req.query);
    const { data, metadata } = await categoryService.getAllCategory(req.pagination)
    res.send({
        status: 1,
        data,
        metadata
    })
}

const getCategoryById = async (req, res) => {
    const { id } = req.params;
    const { data } = await categoryService.getCategoryById(id);
    res.send({
        status: 1,
        data
    })
}

const createCategory = async (req, res) => {
    await categoryService.createCategory(req.body)
    res.send({
        status: 1
    })
}

const updateCategory = async (req, res) => {
    const { id } = req.params;
    await categoryService.updateCategoryById(id, req.body)
    res.send({
        status: 1
    })
}

const deleteCategory = async (req, res) => {
    const { id } = req.params;
    await categoryService.deleteCategoryById(id)
    res.send({
        status: 1
    })
}

module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}