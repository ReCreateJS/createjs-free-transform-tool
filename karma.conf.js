// eslint env node

// Karma configuration
// Generated on Wed Dec 11 2019 07:30:25 GMT+1300 (NZDT)

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: [
      {
        pattern: "tests/images/*.*",
        watched: false,
        included: false,
        served: true,
        nocache: false
      },
      "module-shim.js",
      "node_modules/pixelmatch/index.js",
      "demo/easeljs.js",
      "createjs.util.FreeTransformTool.js",
      "tests/*.js"
    ],

    proxies: {
      "/img/": "/base/tests/images/"
    },

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    browsers: ["ChromeWithoutGPU", "FirefoxWithoutGPU"],

    // disable gpu to stay consistent with headless renders
    customLaunchers: {
      ChromeWithoutGPU: {
        base: "Chrome",
        flags: ["--disable-gpu"]
      },
      ChromeHeadlessWithoutGPU: {
        base: "ChromeHeadless",
        flags: ["--disable-gpu"]
      },
      FirefoxWithoutGPU: {
        base: "Firefox",
        prefs: {
          "webgl.disabled": true
        }
      }
    },

    client: {
      clearContext: false
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
