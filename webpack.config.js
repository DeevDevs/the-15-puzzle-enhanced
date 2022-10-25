const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// to add babel - npm i -D babel-loader @babel/core @babel/preset-env  <== this is to make the code compatible for older browsers
// to make assts/resource work, install file-loader and url-loader packages
//try webpack-bundle-analyzer

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif|wav)$/i,
        type: "asset/resource",
      },
      // {
      //   test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      //   use: "url-loader?limit=100000",
      // },
      // {
      //   test: /\.(gif|svg|jpg|png|wav)$/,
      //   loader: "file-loader",
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "The 15 Puzzle Enhanced",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};

// package scripts
// "build": "webpack",
// "dev": "webpack serve --env develop"

// const devServer = (isDev) =>
//   !isDev
//     ? {}
//     : {
//         devServer: {
//           open: true,
//           hot: true,
//           port: 8080,
//           static: {
//             directory: path.join(__dirname, "./public"),
//           },
//         },
//       };

// module.exports = ({ develop }) => ({
//   mode: develop ? "development" : "production",
//   devtool: develop ? "inline-source-map" : false,
//   entry: {
//     main: "./src/index.js",
//   },
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[name].[contenthash].js",
//     assetModuleFilename: "assets/[hash][ext]",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
//         type: "asset/resource",
//       },
//       {
//         test: /\.(woff(2)?|eot|ttf|otf)$/i,
//         type: "asset/resource",
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".ts", ".js"],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./src/index.html",
//     }),
//     new MiniCssExtractPlugin({
//       filename: "styles.css",
//       filename: "[name].[contenthash].css",
//     }),
//     new CopyPlugin({
//       patterns: [{ from: "./public" }],
//     }),
//     new CleanWebpackPlugin({
//       cleanStaleWebpackAssets: false,
//     }),
//   ],
//   ...devServer(develop),
// });
