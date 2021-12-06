import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    entry: [
        path.resolve(__dirname, 'src', 'index.js'),
        path.resolve(__dirname, 'src', 'index.scss'),
    ],
    output: {
        path: path.join(__dirname, 'dist'), // bundled file in dist/
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/, // applies to js files
                use: ['babel-loader'], // transpiles your js
                exclude: /node_modules/, // don't transpile node modules
            },
            {
                test: /\.s?[ac]ss$/, // applies to css/scss/sass files
                use: [
                    MiniCssExtractPlugin.loader, // create bundled css file
                    {
                        loader: 'css-loader', // resolves @import statements
                        options: { url: false } // don't resolve url() statements
                    },
                    'sass-loader', // compiles sass to css
                ]
            }
        ],
    },
    // target: 'node',
    plugins: [new MiniCssExtractPlugin()],
};

const exportFunc = (env, argv) => {
    if (argv.mode === 'production') {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'eval-source-map';
    }

    return config;
}

export default exportFunc;