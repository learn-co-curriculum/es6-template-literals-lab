module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      { pattern: './spec/template-literals-spec.js', watched: false }
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      './spec/template-literals-spec.js': ['webpack']
    },
    webpack: {
      module: {
        loaders: [
          { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};