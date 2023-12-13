"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/staticlabs";
exports.ids = ["pages/api/staticlabs"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/staticlabs.js":
/*!*********************************!*\
  !*** ./pages/api/staticlabs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    //Find the absolute path of the json directory\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"json\");\n    //Read the json data file data.json\n    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + \"/labs.json\", \"utf8\");\n    //Return the content of the data file in json format\n    res.status(200).json(fileContents);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RhdGljbGFicy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QjtBQUNZO0FBRXJCLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLDhDQUE4QztJQUM5QyxNQUFNQyxnQkFBZ0JOLGdEQUFTLENBQUNRLFFBQVFDLEdBQUcsSUFBSTtJQUMvQyxtQ0FBbUM7SUFDbkMsTUFBTUMsZUFBZSxNQUFNUixpREFBVyxDQUFDSSxnQkFBZ0IsY0FBYztJQUNyRSxvREFBb0Q7SUFDcERELElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO0FBQ3ZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc3RhdGljbGFicy5qcz8yYTM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAvL0ZpbmQgdGhlIGFic29sdXRlIHBhdGggb2YgdGhlIGpzb24gZGlyZWN0b3J5XHJcbiAgY29uc3QganNvbkRpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnanNvbicpO1xyXG4gIC8vUmVhZCB0aGUganNvbiBkYXRhIGZpbGUgZGF0YS5qc29uXHJcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gYXdhaXQgZnMucmVhZEZpbGUoanNvbkRpcmVjdG9yeSArICcvbGFicy5qc29uJywgJ3V0ZjgnKTtcclxuICAvL1JldHVybiB0aGUgY29udGVudCBvZiB0aGUgZGF0YSBmaWxlIGluIGpzb24gZm9ybWF0XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZmlsZUNvbnRlbnRzKTtcclxufSJdLCJuYW1lcyI6WyJwYXRoIiwicHJvbWlzZXMiLCJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJqc29uRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/staticlabs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/staticlabs.js"));
module.exports = __webpack_exports__;

})();