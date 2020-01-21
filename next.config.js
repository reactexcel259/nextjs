const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withTM = require('next-transpile-modules')(['react-owl-carousel2', 'react-loader-spinner']);

module.exports = withImages(withCSS(withTM({
    cssModules: false,
    cssLoaderOptions:{
        url:false
    },
    webpack: config => {
        if (typeof require !== "undefined") {
          require.extensions[".css"] = file => {};
        }

        return config;
      }
  }
  )))