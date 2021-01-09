const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.tsx',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: "index_bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: true
        })

    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
               exclude: /node_modules/
            }
        ],
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

};

