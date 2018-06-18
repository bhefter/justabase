const isProduction = process.env.NODE_ENV === 'prod';

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
        'src/**/*.ts'
    ],
    preprocessors: {
        '**/*.ts': 'karma-typescript'
    },
    reporters: ['progress', 'karma-typescript'],
    browsers: isProduction ? ['Chrome'] : null
  });
};