const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist/min'),
        filename: 'acryl-marshall.min.js',
        library: 'AcrylMarshall',
        //libraryTarget: 'commonjs'
    },
    plugins: [],
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    },
                ],
            },
        ]
    },
};

