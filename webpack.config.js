const path = require('path');

const src_dir = path.join(__dirname, '/client/src');
const dist_dir = path.join(__dirname, '/client/dist');

module.exports = {
  entry: [`${src_dir}/index.js`],
  output: {
      filename: 'bundle.js',
      path: dist_dir
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
    ]
  },
}