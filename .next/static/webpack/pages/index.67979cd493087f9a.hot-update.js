"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const apiKey = \"ntiWUplo2K69bdOstoJeNMViBszdT8BoBK1oeChi\";\n    const url = \"https://api.nasa.gov/techtransfer/patent/?q=10&engine&api_key=\".concat(apiKey);\n    const getTechTransferData = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url);\n        const info = await res.data;\n        console.log(info);\n        setData(info);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getTechTransferData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlenarduzzi1/Desktop/nasa/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlenarduzzi1/Desktop/nasa/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlenarduzzi1/Desktop/nasa/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlenarduzzi1/Desktop/nasa/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mlenarduzzi1/Desktop/nasa/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"NASA POLYCHROMATIC\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlenarduzzi1/Desktop/nasa/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                        href: \"/polychromatic\",\n                        children: \"polychromatic views\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlenarduzzi1/Desktop/nasa/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().gridContainer),\n                        children: data && data.results.map((tech, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: tech && tech.map((t, ind)=>{\n                                    if (ind === 10) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: t,\n                                                alt: t,\n                                                width: 100,\n                                                height: 100\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mlenarduzzi1/Desktop/nasa/pages/index.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, ind, false, {\n                                            fileName: \"/Users/mlenarduzzi1/Desktop/nasa/pages/index.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 21\n                                        }, this);\n                                    }\n                                })\n                            }, index, false, {\n                                fileName: \"/Users/mlenarduzzi1/Desktop/nasa/pages/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/mlenarduzzi1/Desktop/nasa/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mlenarduzzi1/Desktop/nasa/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"WZ2PO9A64oHRexE1CE+yX3ebuoA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0U7QUFFZTtBQUNGO0FBQ2xCO0FBQ0c7QUFFYixTQUFTTyxPQUFPOztJQUU3QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBO0lBRWhDLE1BQU1NLFNBQVM7SUFDZixNQUFNQyxNQUFNLGlFQUF3RSxPQUFQRDtJQUU3RSxNQUFNRSxzQkFBc0IsVUFBWTtRQUN0QyxNQUFNQyxNQUFNLE1BQU1SLGlEQUFTLENBQUNNO1FBQzVCLE1BQU1JLE9BQU8sTUFBTUYsSUFBSUwsSUFBSTtRQUMzQlEsUUFBUUMsR0FBRyxDQUFDRjtRQUNaTixRQUFRTTtJQUNWO0lBRUFaLGdEQUFTQSxDQUFDLElBQU07UUFDZFM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNaLGtEQUFJQTs7a0NBQ0gsOERBQUNrQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBS0MsV0FBV3hCLHFFQUFXOztrQ0FDMUIsOERBQUN5QjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDckIsa0RBQUlBO3dCQUFDb0IsV0FBV3hCLHFFQUFXO3dCQUFFc0IsTUFBSztrQ0FBaUI7Ozs7OztrQ0FFMUQsOERBQUNJO3dCQUFJRixXQUFXeEIsOEVBQW9CO2tDQUNqQ00sUUFDQ0EsS0FBS3NCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVU7NEJBQ2hDLHFCQUNFLDhEQUFDTDswQ0FDRUksUUFDQ0EsS0FBS0QsR0FBRyxDQUFDLENBQUNHLEdBQUdDLE1BQVE7b0NBQ25CLElBQUlBLFFBQVEsSUFBSTt3Q0FDZCxxQkFDRSw4REFBQ1A7c0RBQ0MsNEVBQUMzQixtREFBS0E7Z0RBQUNtQyxLQUFLRjtnREFBR0csS0FBS0g7Z0RBQUdJLE9BQU87Z0RBQUtDLFFBQVE7Ozs7OzsyQ0FEbkNKOzs7OztvQ0FJZCxDQUFDO2dDQUNIOytCQVZNRjs7Ozs7d0JBYWQ7Ozs7Ozs7Ozs7Ozs7O0FBS0wsQ0FBQztHQXBEc0IxQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgYXBpS2V5ID0gXCJudGlXVXBsbzJLNjliZE9zdG9KZU5NVmlCc3pkVDhCb0JLMW9lQ2hpXCJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm5hc2EuZ292L3RlY2h0cmFuc2Zlci9wYXRlbnQvP3E9MTAmZW5naW5lJmFwaV9rZXk9JHthcGlLZXl9YFxuXG4gIGNvbnN0IGdldFRlY2hUcmFuc2ZlckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgY29uc3QgaW5mbyA9IGF3YWl0IHJlcy5kYXRhO1xuICAgIGNvbnNvbGUubG9nKGluZm8pO1xuICAgIHNldERhdGEoaW5mbylcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VGVjaFRyYW5zZmVyRGF0YSgpO1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMT5OQVNBIFBPTFlDSFJPTUFUSUM8L2gxPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfSBocmVmPVwiL3BvbHljaHJvbWF0aWNcIj5wb2x5Y2hyb21hdGljIHZpZXdzPC9MaW5rPlxuXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZENvbnRhaW5lcn0+XG4gICAge2RhdGEgJiZcbiAgICAgIGRhdGEucmVzdWx0cy5tYXAoKHRlY2gsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHt0ZWNoICYmXG4gICAgICAgICAgICAgIHRlY2gubWFwKCh0LCBpbmQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kID09PSAxMCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dH0gYWx0PXt0fSB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgPC9kaXY+XG48L21haW4+XG48Lz5cbiAgKVxuIH0iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkxpbmsiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJhcGlLZXkiLCJ1cmwiLCJnZXRUZWNoVHJhbnNmZXJEYXRhIiwicmVzIiwiZ2V0IiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwiZGl2IiwiZ3JpZENvbnRhaW5lciIsInJlc3VsdHMiLCJtYXAiLCJ0ZWNoIiwiaW5kZXgiLCJ0IiwiaW5kIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});