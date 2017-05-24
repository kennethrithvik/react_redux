import webpack from 'webpack';
import path from 'path';

export default {
    //debug: true,
    devtool: 'cheap-module-eval-source-map',
    //noInfo: false,
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        './src/index'
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            use: ['babel-loader']
        }, {
            test: /(\.css)$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: ['file-loader']
        }, {
            test: /\.(woff|woff2)$/,
            use: 'url?prefix=font/&limit=5000'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            use: 'url?limit=10000&mimetype=application/octet-stream'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: 'url?limit=10000&mimetype=image/svg+xml'
        }]
    }
};