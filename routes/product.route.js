const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

// called CONTROLLER function
router.get('/', getProducts);

// to get single Product function
router.get("/:id", getProduct);

// to create single Product function
router.post("/", createProduct);

// to Update Product function
router.put("/:id", updateProduct);

// to Delete Product function
router.delete("/:id", deleteProduct);

module.exports = router;
