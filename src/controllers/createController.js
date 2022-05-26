const router = require('express').Router();
const fs = require('fs/promises');
const cubes = require('../db.json');
const cubeService = require('../services/cubeService');

router.get('/create', (req, res) => {
    res.render('create');
})

router.post('/create', async (req, res) => {
    const cube = req.body;
    //Validate
    if (cube.name.length <= 0) {
        return res.status(400).send('Invalid request');
    }
    try {
        //save data
        await cubeService.save(cube)
        //redirect to the page
        res.redirect('/');
    }
    catch (err) {
        res.status(400).send(err)
    }
});

router.get('/details/:id', (req, res) => {
    const cube = cubeService.getOne(req.params.id)
    res.render('details', { cube });
});
module.exports = router;