module.exports = {
  devServer: {
    // proxy: 'http://18.217.211.176:3000',
    proxy: {
      '^/reservation': {
          target: 'http://18.217.211.176:3000' // 개발서버
      }
  }

  },
  runtimeCompiler: true,
};
