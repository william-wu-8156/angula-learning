module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/angular/angular.js',
      'app/angular-mocks/angular-mocks.js',
      'app/angular-route/angular-route.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};

