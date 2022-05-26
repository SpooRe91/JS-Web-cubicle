const fs = require('fs/promises');
const cubes = require('../db.json');

exports.save = (cube) => {
    cubes.push(cube)
    let textData = JSON.stringify(cubes, '', 4);
    return fs.writeFile(('./src/db.json'), textData, { encoding: 'utf-8' })
};

exports.getOne = (cubeId) => cubes[cubeId];
