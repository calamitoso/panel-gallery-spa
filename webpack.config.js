'use strict';

var path = require('path');

module.exports = {

    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'panel-gallery-spa.js',
        libraryTarget: 'umd'
    }

}