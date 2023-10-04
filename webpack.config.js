const path = require("path");

const webpack = require("webpack");
const RewiremockPlugin = require("rewiremock/webpack/plugin");

module.exports = {
  entry: "./src/index.ts",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new RewiremockPlugin(),
  ],
};
