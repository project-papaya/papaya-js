const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.tsx',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist.client'),
    },
    resolve: {
        extensions: ['.js', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /(node_modules)/,
                use: {
                    // `.swcrc` can be used to configure swc
                    loader: "swc-loader"
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './client/index.html',
        publicPath: '/',
    })],
    devServer: {
        hot: true,
        proxy: {
            '/': 'http://localhost:3000',
        },
    },
};