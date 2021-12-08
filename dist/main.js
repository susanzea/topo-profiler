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

eval("// import Test from './scripts/test.js'\n// import ee from '@google/earthengine';\n// import {authenticate} from './scripts/api_util.js';\n// import privateKey from '../app.js';\n// window.ee = ee;\n// window.authenticate = authenticate;\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log('content loaded');\n  var body = document.querySelector(\"body\");\n  var list = document.createElement(\"ul\");\n  body.append(list); // ul showed up on page so webpack is working\n  // const test = authenticate();\n  // window.test = test;\n  // ee.data.authenticateViaPrivateKey(privateKey);\n  // const image = new ee.Image('srtm90_v4');\n  // image.getMap({ min: 0, max: 1000 }, function (map) {\n  //     console.log(map);\n  // });\n\n  var catalinaButton = document.getElementById(\"catalina-button\");\n  catalinaButton.addEventListener(\"click\", function () {\n    console.log(\"catalina clicked\"); //hide homepage code\n\n    var homepageDiv = document.getElementsByClassName(\"homepage\")[0];\n    console.log(homepageDiv);\n    homepageDiv.style.visibility = \"hidden\";\n    homepageDiv.style.height = \"0px\"; //show map page code\n\n    var mapPageDiv = document.getElementsByClassName(\"map-page\")[0];\n    console.log(mapPageDiv);\n    mapPageDiv.style.visibility = \"visible\";\n    homepageDiv.style.height = \"100vh\";\n  });\n}); // Authenticate using one (but not both) of the methods below.\n// ee.data.authenticateViaOauth(YOUR_CLIENT_ID);\n// ee.initialize();\n// Run an Earth Engine script.\n// var image = new ee.Image('srtm90_v4');\n// image.getMap({ min: 0, max: 1000 }, function (map) {\n//     console.log(map);\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BvX3Byb2ZpbGVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwibGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJjYXRhbGluYUJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwiaG9tZXBhZ2VEaXYiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwiaGVpZ2h0IiwibWFwUGFnZURpdiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaERDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0EsTUFBTUMsSUFBSSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLE1BQU1DLElBQUksR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLElBQXZCLENBQWI7QUFDQUgsRUFBQUEsSUFBSSxDQUFDSSxNQUFMLENBQVlGLElBQVosRUFKZ0QsQ0FJOUI7QUFDbEI7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsY0FBYyxHQUFHVCxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXZCO0FBRUFELEVBQUFBLGNBQWMsQ0FBQ1IsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBTTtBQUMzQ0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFEMkMsQ0FHM0M7O0FBQ0EsUUFBTVEsV0FBVyxHQUFHWCxRQUFRLENBQUNZLHNCQUFULENBQWdDLFVBQWhDLEVBQTRDLENBQTVDLENBQXBCO0FBQ0FWLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxXQUFaO0FBQ0FBLElBQUFBLFdBQVcsQ0FBQ0UsS0FBWixDQUFrQkMsVUFBbEIsR0FBK0IsUUFBL0I7QUFDQUgsSUFBQUEsV0FBVyxDQUFDRSxLQUFaLENBQWtCRSxNQUFsQixHQUEyQixLQUEzQixDQVAyQyxDQVMzQzs7QUFDQSxRQUFNQyxVQUFVLEdBQUdoQixRQUFRLENBQUNZLHNCQUFULENBQWdDLFVBQWhDLEVBQTRDLENBQTVDLENBQW5CO0FBQ0FWLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYSxVQUFaO0FBQ0FBLElBQUFBLFVBQVUsQ0FBQ0gsS0FBWCxDQUFpQkMsVUFBakIsR0FBOEIsU0FBOUI7QUFDQUgsSUFBQUEsV0FBVyxDQUFDRSxLQUFaLENBQWtCRSxNQUFsQixHQUEyQixPQUEzQjtBQUNILEdBZEQ7QUFpQkgsQ0FqQ0QsRSxDQWdEQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFRlc3QgZnJvbSAnLi9zY3JpcHRzL3Rlc3QuanMnXG4vLyBpbXBvcnQgZWUgZnJvbSAnQGdvb2dsZS9lYXJ0aGVuZ2luZSc7XG4vLyBpbXBvcnQge2F1dGhlbnRpY2F0ZX0gZnJvbSAnLi9zY3JpcHRzL2FwaV91dGlsLmpzJztcbi8vIGltcG9ydCBwcml2YXRlS2V5IGZyb20gJy4uL2FwcC5qcyc7XG5cbi8vIHdpbmRvdy5lZSA9IGVlO1xuLy8gd2luZG93LmF1dGhlbnRpY2F0ZSA9IGF1dGhlbnRpY2F0ZTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjb250ZW50IGxvYWRlZCcpXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgIGJvZHkuYXBwZW5kKGxpc3QpIC8vIHVsIHNob3dlZCB1cCBvbiBwYWdlIHNvIHdlYnBhY2sgaXMgd29ya2luZ1xuICAgIC8vIGNvbnN0IHRlc3QgPSBhdXRoZW50aWNhdGUoKTtcbiAgICAvLyB3aW5kb3cudGVzdCA9IHRlc3Q7XG5cbiAgICAvLyBlZS5kYXRhLmF1dGhlbnRpY2F0ZVZpYVByaXZhdGVLZXkocHJpdmF0ZUtleSk7XG4gICAgLy8gY29uc3QgaW1hZ2UgPSBuZXcgZWUuSW1hZ2UoJ3NydG05MF92NCcpO1xuICAgIC8vIGltYWdlLmdldE1hcCh7IG1pbjogMCwgbWF4OiAxMDAwIH0sIGZ1bmN0aW9uIChtYXApIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2cobWFwKTtcbiAgICAvLyB9KTtcbiAgICBcbiAgICBjb25zdCBjYXRhbGluYUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0YWxpbmEtYnV0dG9uXCIpXG5cbiAgICBjYXRhbGluYUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNhdGFsaW5hIGNsaWNrZWRcIilcblxuICAgICAgICAvL2hpZGUgaG9tZXBhZ2UgY29kZVxuICAgICAgICBjb25zdCBob21lcGFnZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJob21lcGFnZVwiKVswXVxuICAgICAgICBjb25zb2xlLmxvZyhob21lcGFnZURpdilcbiAgICAgICAgaG9tZXBhZ2VEaXYuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgICAgICAgaG9tZXBhZ2VEaXYuc3R5bGUuaGVpZ2h0ID0gXCIwcHhcIlxuXG4gICAgICAgIC8vc2hvdyBtYXAgcGFnZSBjb2RlXG4gICAgICAgIGNvbnN0IG1hcFBhZ2VEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFwLXBhZ2VcIilbMF1cbiAgICAgICAgY29uc29sZS5sb2cobWFwUGFnZURpdilcbiAgICAgICAgbWFwUGFnZURpdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCJcbiAgICAgICAgaG9tZXBhZ2VEaXYuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiXG4gICAgfSlcbiAgICBcbiAgICBcbn0pXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gQXV0aGVudGljYXRlIHVzaW5nIG9uZSAoYnV0IG5vdCBib3RoKSBvZiB0aGUgbWV0aG9kcyBiZWxvdy5cbi8vIGVlLmRhdGEuYXV0aGVudGljYXRlVmlhT2F1dGgoWU9VUl9DTElFTlRfSUQpO1xuXG5cbi8vIGVlLmluaXRpYWxpemUoKTtcblxuLy8gUnVuIGFuIEVhcnRoIEVuZ2luZSBzY3JpcHQuXG4vLyB2YXIgaW1hZ2UgPSBuZXcgZWUuSW1hZ2UoJ3NydG05MF92NCcpO1xuLy8gaW1hZ2UuZ2V0TWFwKHsgbWluOiAwLCBtYXg6IDEwMDAgfSwgZnVuY3Rpb24gKG1hcCkge1xuLy8gICAgIGNvbnNvbGUubG9nKG1hcCk7XG4vLyB9KTtcbiJdLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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