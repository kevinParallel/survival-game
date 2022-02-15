/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appPath = "http://localhost:4019";

const config = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    filename: "game.js",
    library: "game",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  mode: "production",
  module: {
    rules: [
      {
        oneOf: [
          // Split out otherwise performance is really poor
          {
            test: /\.(ts|tsx)?$/,
            use: "ts-loader",
            exclude: /node_modules/,
          },
          {
            exclude: [/\.(js|mjs|ts|tsx)$/, /\.html$/, /\.json$/],
            loader: "file-loader",
            options: {
              name: "media/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [__dirname, "node_modules"],
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      path: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Survival Game",
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html",
    }),
  ],
  devtool: "source-map",
};

module.exports = config;
