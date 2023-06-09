const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    devServer: {
      proxy: {
        '/api': {
          target: '',
          pathRewrite:{'^/api':''},//路径改写
        },
      }
    }
  })