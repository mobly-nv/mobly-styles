const path = require("path");

const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const resolvePath = (_path) => path.resolve(__dirname, _path);

const defaultUrlLoader = {
  loader: "url-loader",
  options: {
    // If the limit is exceeded it will by default fallback to the file-loader
    limit: 10000,
    // file-loader options
    name: "[path][name]-[hash:7].[ext]",
    context: "src",
  }
};

module.exports = {
  mode: "production",
  entry: "./src/scss/index.scss",
  output: {
    path: resolvePath("dist"),
  },
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff2?)$/,
        include: [
          resolvePath("src/assets/fonts"),
        ],
        use: defaultUrlLoader,
      },
      {
        test: /\.(jpg|png)$/,
        include: [
          resolvePath("src/assets/img"),
        ],
        use: defaultUrlLoader,
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
      filename: "assets/css/[name].css",
      chunkFilename: "[id].css",
    }),
    new CopyWebpackPlugin([
      {
        from: resolvePath("src/scss"),
        to: resolvePath("dist/scss")
      },
    ]),
  ],
};
