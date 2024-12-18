const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point for React
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process .js and .jsx files
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/, // Process CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // File extensions to resolve
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "assets", to: "assets" }, // Adjust paths as needed
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"), // Serve static files
    compress: true, // Enable gzip compression
    port: 3000, // Specify the port
    open: true, // Automatically open the browser
  },
};
