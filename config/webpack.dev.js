const path = require('path');

module.exports = {
  entry: {
    name: ["./src/main.js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  devServer: {
    contentBase: "dist"
  }
}