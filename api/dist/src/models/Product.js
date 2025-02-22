"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: Array,
        required: true
    },
    brand: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Brand'
    }
});
const Product = (0, mongoose_1.model)("Product", productSchema);
exports.default = Product;
