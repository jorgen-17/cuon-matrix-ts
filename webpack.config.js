const webpack = require("webpack");
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require("path");
const env = require("yargs").argv.env;

let libraryName = "cuon-matrix-ts";

let plugins = [];
let outputFile = "";

if (env === "build")
{
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = libraryName + ".min.js";
}
else
{
    outputFile = libraryName + ".js";
}

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: outputFile,
        path: __dirname + "/lib",
        library: libraryName,
        libraryTarget: "umd",
        umdNamedDefine: true
    },

    devtool: "source-map",

    resolve: {
        modules: [path.resolve("./src")],
        extensions: [".ts"]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },

    plugins: plugins
};