const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = 3000;
const hostname = 'localhost';

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
});

server.listen(port, hostname, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at ${hostname}:${port}`);
});
