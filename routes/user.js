const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();//findAll전체검색
        res.json(users);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.post('/', (req, res) => {

});


router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;