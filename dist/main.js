/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// import Test from './scripts/test.js'\n// import ee from '@google/earthengine';\n// import {authenticate} from './scripts/api_util.js';\n// import privateKey from '../app.js';\n// window.ee = ee;\n// window.authenticate = authenticate;\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log('content loaded');\n  var body = document.querySelector(\"body\");\n  var list = document.createElement(\"ul\");\n  body.append(list); // ul showed up on page so webpack is working\n  // const test = authenticate();\n  // window.test = test;\n  // ee.data.authenticateViaPrivateKey(privateKey);\n  // const image = new ee.Image('srtm90_v4');\n  // image.getMap({ min: 0, max: 1000 }, function (map) {\n  //     console.log(map);\n  // });\n\n  var catalinaButton = document.getElementById(\"catalina-button\");\n  catalinaButton.addEventListener(\"click\", function () {\n    console.log(\"catalina clicked\"); //change homepage to hidden\n\n    var homepageDiv = document.getElementsByClassName(\"homepage\");\n    homepageDiv.getAttribute(\"class\"); // homepageDiv.setAttribute('visibility', 'hidden');\n    //change map page to visible\n  });\n}); // Authenticate using one (but not both) of the methods below.\n// ee.data.authenticateViaOauth(YOUR_CLIENT_ID);\n// ee.initialize();\n// Run an Earth Engine script.\n// var image = new ee.Image('srtm90_v4');\n// image.getMap({ min: 0, max: 1000 }, function (map) {\n//     console.log(map);\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BvX3Byb2ZpbGVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwibGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJjYXRhbGluYUJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwiaG9tZXBhZ2VEaXYiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsTUFBTUMsSUFBSSxHQUFHTixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBYjtBQUNBSCxFQUFBQSxJQUFJLENBQUNJLE1BQUwsQ0FBWUYsSUFBWixFQUpnRCxDQUk5QjtBQUNsQjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRyxjQUFjLEdBQUdULFFBQVEsQ0FBQ1UsY0FBVCxDQUF3QixpQkFBeEIsQ0FBdkI7QUFFQUQsRUFBQUEsY0FBYyxDQUFDUixnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxZQUFNO0FBQzNDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUQyQyxDQUczQzs7QUFDQSxRQUFNUSxXQUFXLEdBQUdYLFFBQVEsQ0FBQ1ksc0JBQVQsQ0FBZ0MsVUFBaEMsQ0FBcEI7QUFDQUQsSUFBQUEsV0FBVyxDQUFDRSxZQUFaLENBQXlCLE9BQXpCLEVBTDJDLENBTTNDO0FBQ0E7QUFFSCxHQVREO0FBWUgsQ0E1QkQsRSxDQTJDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFRlc3QgZnJvbSAnLi9zY3JpcHRzL3Rlc3QuanMnXG4vLyBpbXBvcnQgZWUgZnJvbSAnQGdvb2dsZS9lYXJ0aGVuZ2luZSc7XG4vLyBpbXBvcnQge2F1dGhlbnRpY2F0ZX0gZnJvbSAnLi9zY3JpcHRzL2FwaV91dGlsLmpzJztcbi8vIGltcG9ydCBwcml2YXRlS2V5IGZyb20gJy4uL2FwcC5qcyc7XG5cbi8vIHdpbmRvdy5lZSA9IGVlO1xuLy8gd2luZG93LmF1dGhlbnRpY2F0ZSA9IGF1dGhlbnRpY2F0ZTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjb250ZW50IGxvYWRlZCcpXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgIGJvZHkuYXBwZW5kKGxpc3QpIC8vIHVsIHNob3dlZCB1cCBvbiBwYWdlIHNvIHdlYnBhY2sgaXMgd29ya2luZ1xuICAgIC8vIGNvbnN0IHRlc3QgPSBhdXRoZW50aWNhdGUoKTtcbiAgICAvLyB3aW5kb3cudGVzdCA9IHRlc3Q7XG5cbiAgICAvLyBlZS5kYXRhLmF1dGhlbnRpY2F0ZVZpYVByaXZhdGVLZXkocHJpdmF0ZUtleSk7XG4gICAgLy8gY29uc3QgaW1hZ2UgPSBuZXcgZWUuSW1hZ2UoJ3NydG05MF92NCcpO1xuICAgIC8vIGltYWdlLmdldE1hcCh7IG1pbjogMCwgbWF4OiAxMDAwIH0sIGZ1bmN0aW9uIChtYXApIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2cobWFwKTtcbiAgICAvLyB9KTtcbiAgICBcbiAgICBjb25zdCBjYXRhbGluYUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0YWxpbmEtYnV0dG9uXCIpXG5cbiAgICBjYXRhbGluYUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNhdGFsaW5hIGNsaWNrZWRcIilcblxuICAgICAgICAvL2NoYW5nZSBob21lcGFnZSB0byBoaWRkZW5cbiAgICAgICAgY29uc3QgaG9tZXBhZ2VEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaG9tZXBhZ2VcIilcbiAgICAgICAgaG9tZXBhZ2VEaXYuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICAgICAgLy8gaG9tZXBhZ2VEaXYuc2V0QXR0cmlidXRlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICAvL2NoYW5nZSBtYXAgcGFnZSB0byB2aXNpYmxlXG5cbiAgICB9KVxuICAgIFxuICAgIFxufSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBBdXRoZW50aWNhdGUgdXNpbmcgb25lIChidXQgbm90IGJvdGgpIG9mIHRoZSBtZXRob2RzIGJlbG93LlxuLy8gZWUuZGF0YS5hdXRoZW50aWNhdGVWaWFPYXV0aChZT1VSX0NMSUVOVF9JRCk7XG5cblxuLy8gZWUuaW5pdGlhbGl6ZSgpO1xuXG4vLyBSdW4gYW4gRWFydGggRW5naW5lIHNjcmlwdC5cbi8vIHZhciBpbWFnZSA9IG5ldyBlZS5JbWFnZSgnc3J0bTkwX3Y0Jyk7XG4vLyBpbWFnZS5nZXRNYXAoeyBtaW46IDAsIG1heDogMTAwMCB9LCBmdW5jdGlvbiAobWFwKSB7XG4vLyAgICAgY29uc29sZS5sb2cobWFwKTtcbi8vIH0pO1xuIl0sImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BvX3Byb2ZpbGVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;