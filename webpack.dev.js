/* eslint-env node */
/* eslint-disable */
const webpack = require("webpack");
const config = require("./webpack.config.js");

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.devServer = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

config.mode = "development";

module.exports = config;
