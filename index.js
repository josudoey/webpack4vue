var webpack = require("webpack"),
  merge = require("merge");

module.exports = function (opts) {
  var opts = opts || {};
  var module = opts.module = opts.module || {};
  var resolve = module.resolve = module.resolve || {};
  resolve.alias = merge(resolve.alias, require("./alias"));
  module.loaders = require("./loaders");
  var args = Array.prototype.slice.call(arguments);
  args[0] = opts;
  return webpack.apply(this, args);
}

