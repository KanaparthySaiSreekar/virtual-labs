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
exports.id = "pages/api/staticlab01";
exports.ids = ["pages/api/staticlab01"];
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

/***/ "(api)/./pages/api/staticlab01.js":
/*!**********************************!*\
  !*** ./pages/api/staticlab01.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    //Find the absolute path of the json directory\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"json\");\n    //Read the json data file data.json\n    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + \"/lab01.json\", \"utf8\");\n    //Return the content of the data file in json format\n    res.status(200).json(fileContents);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RhdGljbGFiMDEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0I7QUFDWTtBQUVyQixlQUFlRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5Qyw4Q0FBOEM7SUFDOUMsTUFBTUMsZ0JBQWdCTixnREFBUyxDQUFDUSxRQUFRQyxHQUFHLElBQUk7SUFDL0MsbUNBQW1DO0lBQ25DLE1BQU1DLGVBQWUsTUFBTVIsaURBQVcsQ0FBQ0ksZ0JBQWdCLGVBQWU7SUFDdEUsb0RBQW9EO0lBQ3BERCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3N0YXRpY2xhYjAxLmpzP2JiMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIC8vRmluZCB0aGUgYWJzb2x1dGUgcGF0aCBvZiB0aGUganNvbiBkaXJlY3RvcnlcclxuICBjb25zdCBqc29uRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdqc29uJyk7XHJcbiAgLy9SZWFkIHRoZSBqc29uIGRhdGEgZmlsZSBkYXRhLmpzb25cclxuICBjb25zdCBmaWxlQ29udGVudHMgPSBhd2FpdCBmcy5yZWFkRmlsZShqc29uRGlyZWN0b3J5ICsgJy9sYWIwMS5qc29uJywgJ3V0ZjgnKTtcclxuICAvL1JldHVybiB0aGUgY29udGVudCBvZiB0aGUgZGF0YSBmaWxlIGluIGpzb24gZm9ybWF0XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZmlsZUNvbnRlbnRzKTtcclxufSJdLCJuYW1lcyI6WyJwYXRoIiwicHJvbWlzZXMiLCJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJqc29uRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/staticlab01.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/staticlab01.js"));
module.exports = __webpack_exports__;

})();