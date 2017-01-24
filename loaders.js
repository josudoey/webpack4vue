module.exports = [{
  test: /\.html$/,
  loader: "raw-loader!html-minify-loader"
}, {
  test: /\.css$/,
  loader: "style-loader!css-loader"
}, {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'regenerator-loader'
}, {
  test: /\.vue$/,
  loader: 'vue-loader'
}, {
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader: 'url-loader',
  query: {
    name: 'img/[name].[hash:8].[ext]'
  }
}, {
  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  loader: 'url-loader',
  query: {
    name: 'fonts/[name].[hash:8].[ext]'
  }
}];

