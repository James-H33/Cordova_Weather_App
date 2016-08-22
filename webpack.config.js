var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './www/js/functions.js',
    output: {
        path: './www/js/',
        filename: 'scripts.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
