var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      Player: 'app/components/Player.jsx',
      PlayerDetails: 'app/components/PlayerDetails.jsx',
      PlayerForm: 'app/components/PlayerForm.jsx',
      BansList: 'app/components/BansList.jsx',
      Ban: 'app/components/Ban.jsx',
      tmpPlayer: 'app/api/tmpPlayer.jsx',
      applicationStyles: 'app/styles/app.scss',
    },
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-0'
          ]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'eval-source-map'
};
