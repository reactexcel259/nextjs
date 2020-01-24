module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/hello.js":
/*!************************!*\
  !*** ./pages/hello.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hello; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // import Link from 'next/link';
// import Router from 'next/router';


class Hello extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hanldeClikc", () => {
      _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute('/details/cdvsd/vdvs/v');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleGotoDemo", () => {
      console.log('sdvsdvsdv');
      _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute('/demo/cdvsd/vdvs/v');
    });
  }

  render() {
    const {
      id
    } = this.props;
    console.log(this.props);
    let a = 40;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "its hello page of next js", courses.map((item, i) => {
      return __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: `/post/crater/programming/lean/${item.name}/${item.id}`
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2196317585", [a]]]) + " " + "link"
      }, " ", item.name));
    }), __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: `/demo/dvsdv/dsvsdv/dvsdvdvs`
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2196317585", [a]]]) + " " + "link"
    }, " ", "item.name")), __jsx("div", {
      onClick: this.handleGotoDemo,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2196317585", [a]]]) + " " + "click-here"
    }, "go to demo"), __jsx("div", {
      onClick: this.hanldeClikc,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2196317585", [a]]]) + " " + "click-here"
    }, "click here"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2196317585",
      dynamic: [a]
    }, `.link.__jsx-style-dynamic-selector{margin-right:${a}px;}.click-here.__jsx-style-dynamic-selector{cursor:pointer;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2hhbW1hZGRhbmlzaC9EZXNrdG9wL2hlbGxvLW5leHQvcGFnZXMvaGVsbG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NvQixBQUlZLEFBR0EsZUFBQyw2QkFIQSIsImZpbGUiOiIvVXNlcnMvbW9oYW1tYWRkYW5pc2gvRGVza3RvcC9oZWxsby1uZXh0L3BhZ2VzL2hlbGxvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG4vLyBpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gJy4uL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbGxvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBoYW5sZGVDbGlrYz0oKT0+e1xuICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKCcvZGV0YWlscy9jZHZzZC92ZHZzL3YnKVxuICAgIH1cbiAgICBoYW5kbGVHb3RvRGVtbz0oKT0+e1xuICAgICAgY29uc29sZS5sb2coJ3NkdnNkdnNkdicpO1xuICAgICAgXG4gICAgICBSb3V0ZXIucHVzaFJvdXRlKCcvZGVtby9jZHZzZC92ZHZzL3YnKVxuICAgIH1cbiAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2lkfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICAgIGxldCAgYSA9IDQwXG4gICAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgaXRzIGhlbGxvIHBhZ2Ugb2YgbmV4dCBqc1xuICAgICAgICB7XG4gICAgICAgICAgICBjb3Vyc2VzLm1hcCgoaXRlbSxpKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9wb3N0L2NyYXRlci9wcm9ncmFtbWluZy9sZWFuLyR7aXRlbS5uYW1lfS8ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiA+IHtpdGVtLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDxMaW5rIHJvdXRlPXtgL2RlbW8vZHZzZHYvZHN2c2R2L2R2c2R2ZHZzYH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiA+IHtcIml0ZW0ubmFtZVwifTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpY2staGVyZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlR290b0RlbW99PlxuICAgICAgICBnbyB0byBkZW1vXG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGljay1oZXJlXCIgb25DbGljaz17dGhpcy5oYW5sZGVDbGlrY30gPmNsaWNrIGhlcmU8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmxpbmt7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiR7YX1weFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsaWNrLWhlcmV7XG4gICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBjb3Vyc2VzID0gW1xuICAgIHtuYW1lOidqYXZhJywgaWQ6MX0sXG4gICAge25hbWU6J2MrKycsIGlkOjJ9LFxuICAgIHtuYW1lOidqcycsIGlkOjN9LFxuICAgIHtuYW1lOidyZWFjdCcsIGlkOjR9LFxuICAgIHtuYW1lOidyZWFjci1uYXRpdmUnLCBpZDo1fSxcbiAgICB7bmFtZTonamF2YXNjcmlwdCcsIGlkOjZ9LFxuICAgIHtuYW1lOid0ZXN0aW5nJywgaWQ6N30sXG4gICAge25hbWU6J2FuZ3VsYXInLCBpZDo4fVxuXSJdfQ== */
/*@ sourceURL=/Users/mohammaddanish/Desktop/hello-next/pages/hello.js */`));
  }

}
const courses = [{
  name: 'java',
  id: 1
}, {
  name: 'c++',
  id: 2
}, {
  name: 'js',
  id: 3
}, {
  name: 'react',
  id: 4
}, {
  name: 'reacr-native',
  id: 5
}, {
  name: 'javascript',
  id: 6
}, {
  name: 'testing',
  id: 7
}, {
  name: 'angular',
  id: 8
}];

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const nextRoutes = __webpack_require__(/*! next-routes */ "next-routes");

const routes = module.exports = nextRoutes();
routes.add("demo", "/demo/:id/:path*");
routes.add('hello', '/hello/:name/:path*');
routes.add("post/crater", "/post/crater/:id/:path*");
routes.add("details", "/details/:id/:path*");

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/hello.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mohammaddanish/Desktop/hello-next/pages/hello.js */"./pages/hello.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=hello.js.map