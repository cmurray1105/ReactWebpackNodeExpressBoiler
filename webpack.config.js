const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const htmlPlugin = new HtmlWebpackPlugin({
//   template: "./Client/Dist/index.html", 
//   filename: "./Client/Dist/index.html"
// });

const src_dir = path.join(__dirname, './Client/Source');
const dist_dir = path.join(__dirname, '/Client/Dist');

module.exports = {
  entry: [`${src_dir}/index.js`],
  output: {
      filename: 'bundle.js',
      path: dist_dir
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ['@babel/preset-env', '@babel/preset-react']
          // }
        }
      }
    ],
}
// plugins: [htmlPlugin
//   ]
}

// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const path = require('path');
// const htmlPlugin = new HtmlWebPackPlugin({
//   template: "./Client/Dist/index.html", 
//   filename: "./index.html"
// });
// module.exports = {
//   entry: "./Client/Source/index.js",
//   output: { // NEW
//     path: path.join(__dirname, 'Dist'),
//     filename: "bundle.js"
//   }, // NEW Ends
//   plugins: [htmlPlugin],
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
          
//         }
//       }
//     ]
//   }
// };