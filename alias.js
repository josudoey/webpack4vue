var isDebug = process.env.NODE_ENV !== 'production';
module.exports = {
  vue: (isDebug) ? 'vue/dist/vue.js' : 'vue/dist/vue.min.js',
}

