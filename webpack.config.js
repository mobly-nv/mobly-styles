const path = require("path");

const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/scss/index.scss",
  output: {
    path: path.resolve(__dirname, "dist/css"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, "src/scss"),
        ],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [ autoprefixer(), cssnano() ],
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/scss"),
        to: path.resolve(__dirname, "dist/scss"),
      },
    ]),
  ]
};
