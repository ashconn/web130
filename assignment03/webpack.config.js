const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        'app': './src/js/index.js',
        'styles': './src/scss/styles.scss'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i, // .sccs or .sass
                loader: ExtractTextWebpackPlugin.extract([
                    'css-loader',
                    'sass-loader'
                ])
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ],
    devServer: {
        contentBase: __dirname,
        publicPath: '/dist/',
        port: 8080,
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true
    }
}