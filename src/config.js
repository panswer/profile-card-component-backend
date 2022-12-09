const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const PATH_ENV = path.resolve(__dirname, '../.env');

if (fs.existsSync(PATH_ENV)) {
    dotenv.config({
        path: PATH_ENV
    })
}