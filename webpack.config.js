const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};

module.exports = {
    entry: PATHS.src + '/index.js',
    output: {
        path: PATHS.dist,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]

            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 90
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: [0.85, 0.999],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 90
                            }
                        }
                    }
                ]
            },
            ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack app',
            script: 'src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js">'
        })
    ],
    devServer: {
        contentBase : path.join(__dirname,'dist'),
        port:3000,
        hot:true
    },
    mode: "development",

};