const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(morgan('dev'));

const PATH_STATIC_FILES = path.resolve(__dirname, '../public/');

if (fs.existsSync(PATH_STATIC_FILES)) {
    app.use(express.static(PATH_STATIC_FILES));
} else {
    console.log(new Error("The folder of static files don't find"));
    process.exit(1);
}

app.get('/*', (_req, res) => {
    const PATH_INDEX_HTML = path.resolve(PATH_STATIC_FILES, 'index.html');

    if (!fs.existsSync(PATH_INDEX_HTML)) {
        res.status(404).send("Page Not Found");
    } else {
        res.sendFile(PATH_INDEX_HTML);
    }
});

module.exports = app;