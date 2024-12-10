const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",
  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      minChunks: 1,
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    liveReload: true,
    watchFiles: ["src/**/*", "index.html"],
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve("src", "assets", "logo.png"),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
