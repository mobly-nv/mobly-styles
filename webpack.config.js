const path = require("path");

const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const resolvePath = (_path) => path.resolve(__dirname, _path);

module.exports = {
  mode: "production",
  entry: "./src/scss/index.scss",
  output: {
    path: resolvePath("dist"),
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        include: [
          resolvePath("src/assets/img"),
        ],
        use: {
          loader: "url-loader",
          options: {
            // If the limit is exceeded it will by default fallback to the file-loader
            limit: 10000,
            // file-loader options
            name: "[path][name]-[hash:7].[ext]",
            context: "src",
          },
        },
      },
      {
        test: /\.scss$/,
        include: [
          resolvePath("src/scss"),
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
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
      filename: "css/mobly.[hash].css",
      chunkFilename: "[id].css",
    }),
  ],
};
