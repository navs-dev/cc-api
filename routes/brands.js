const { json } = require('body-parser');
const express = require('express');
const router = express.Router();

const Brand = require('../models/brand');

// .............Para obtener todos los brands
router.get('/', async (req, res) => {
    try {
        const brands = await Brand.find();
        res.json(brands);
    } catch (err) {
        res.json({ message: err });
    }
})

// .............Para obtener un brand por su id
router.get('/:postId', async (req, res) => {
    try {
        const findBrandById = await Brand.findById(req.params.postId);
        res.json(findBrandById);    
    } catch (err) {
        res.json({ message: err });
    }
    
})

// .............Para borrar un brand por su id
router.delete('/:postId', async (req, res) => {
    try {
        const removeBrandById = await Brand.remove({_id: req.params.postId});
        res.json(removeBrandById);    
    } catch (err) {
        res.json({ message: err });
    }
    
})

// .............Para cargar un nuevo brand
router.post('/', async (req, res) => {
    const post = new Brand({
        brand: req.body.brand
    });
    try {
        const nuevoBrand = await post.save()
        res.json(nuevoBrand);
    } catch (err) {
        res.json({ message: err });
    }

    // Para verificar.
        console.log(req.body);
});

// .............Para borrar un brand por su id
router.patch('/:postId', async (req, res) => {
    try {
        const updateBrandById = await Brand.updateOne({ _id: req.params.postId }, { $set: {brand: req.body.brand}});
        res.json(updateBrandById);
         
    } catch (err) {
        res.json({ message: err });
    }
    
})

module.exports = router;
