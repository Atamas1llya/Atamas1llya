var path = require('path');

module.exports = {

  entry: "./less/index.less",
  output: {
      path: path.join(__dirname, 'dist'),
      filename: "bundle.js"
  },
  module: {
    loaders: [

      {
        test: /.js$/,
        loader: 'babel-loader'
      },

      {
        test: /.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },

      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader:"url?limit=10000&mimetype=application/font-woff"
      },

      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file"
      }

    ]
  }
}
