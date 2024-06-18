const path = require('path');

module.exports = {
    entry: './app/client/main.js', // Adjust the entry point as needed
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            ['@babel/plugin-transform-runtime', { corejs: 3 }],
                            ['@babel/plugin-proposal-class-properties', { loose: true }],
                            ['@babel/plugin-proposal-private-methods', { loose: true }],
                            ['@babel/plugin-transform-private-property-in-object', { loose: true }],
                            ['module-resolver', {
                                root: ['./app'],
                                alias: {
                                    catalog: './catalog',
                                    //   core: './core',
                                    core: path.resolve(__dirname, 'app/core'),
                                    server: './server',
                                    client: './client',
                                    menu: './menu',
                                    layout: './layout',
                                },
                            }],
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
