const fs = require('fs/promises');
const cubes = require('../db.json');

exports.getAll = (search = "", from = 0, to = 6) => {
    const result = cubes
        .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
        .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to);

    return result;
};

exports.getOne = (cubeId) => cubes[cubeId];

exports.save = (cube) => {
    cubes.push(cube)
    let textData = JSON.stringify(cubes, '', 4);

    return fs.writeFile(('./src/db.json'), textData, { encoding: 'utf-8' })
};
