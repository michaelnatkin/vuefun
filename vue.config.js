// vue.config.js


if (process.env.NODE_ENV=='production') {
  module.exports = {
    configureWebpack: {
      output: {
        publicPath: ''
      }
    }
  }
}