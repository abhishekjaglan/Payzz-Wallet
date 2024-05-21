"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/p2p/page",{

/***/ "(app-pages-browser)/./components/Toggle.tsx":
/*!*******************************!*\
  !*** ./components/Toggle.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/../../node_modules/recoil/es/index.js\");\n/* harmony import */ var _store_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/atoms */ \"(app-pages-browser)/./store/atoms.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Toggle = (param)=>{\n    let { input } = param;\n    _s();\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [transfer, setTransfer] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_store_atoms__WEBPACK_IMPORTED_MODULE_3__.transferAtom);\n    const handleCheckboxChange = ()=>{\n        setIsChecked(!isChecked);\n        setTransfer(!transfer);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            className: \"themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    className: \"sr-only\",\n                    checked: isChecked,\n                    onChange: handleCheckboxChange\n                }, void 0, false, {\n                    fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium \".concat(!isChecked ? \"text-primary bg-[#f4f7ff]\" : \"text-body-color\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            width: \"16\",\n                            height: \"16\",\n                            viewBox: \"0 0 16 16\",\n                            className: \"mr-[6px] fill-current\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                    clipPath: \"url(#clip0_3122_652)\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fillRule: \"evenodd\",\n                                        clipRule: \"evenodd\",\n                                        d: \"M8 0C8.36819 0 8.66667 0.298477 8.66667 0.666667V2C8.66667 2.36819 8.36819 2.66667 8 2.66667C7.63181 2.66667 7.33333 2.36819 7.33333 2V0.666667C7.33333 0.298477 7.63181 0 8 0ZM8 5.33333C6.52724 5.33333 5.33333 6.52724 5.33333 8C5.33333 9.47276 6.52724 10.6667 8 10.6667C9.47276 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.47276 5.33333 8 5.33333ZM4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8ZM8.66667 14C8.66667 13.6318 8.36819 13.3333 8 13.3333C7.63181 13.3333 7.33333 13.6318 7.33333 14V15.3333C7.33333 15.7015 7.63181 16 8 16C8.36819 16 8.66667 15.7015 8.66667 15.3333V14ZM2.3411 2.3424C2.60145 2.08205 3.02356 2.08205 3.28391 2.3424L4.23057 3.28906C4.49092 3.54941 4.49092 3.97152 4.23057 4.23187C3.97022 4.49222 3.54811 4.49222 3.28776 4.23187L2.3411 3.28521C2.08075 3.02486 2.08075 2.60275 2.3411 2.3424ZM12.711 11.7682C12.4506 11.5078 12.0285 11.5078 11.7682 11.7682C11.5078 12.0285 11.5078 12.4506 11.7682 12.711L12.7148 13.6577C12.9752 13.918 13.3973 13.918 13.6577 13.6577C13.918 13.3973 13.918 12.9752 13.6577 12.7148L12.711 11.7682ZM0 8C0 7.63181 0.298477 7.33333 0.666667 7.33333H2C2.36819 7.33333 2.66667 7.63181 2.66667 8C2.66667 8.36819 2.36819 8.66667 2 8.66667H0.666667C0.298477 8.66667 0 8.36819 0 8ZM14 7.33333C13.6318 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.6318 8.66667 14 8.66667H15.3333C15.7015 8.66667 16 8.36819 16 8C16 7.63181 15.7015 7.33333 15.3333 7.33333H14ZM4.23057 11.7682C4.49092 12.0285 4.49092 12.4506 4.23057 12.711L3.28391 13.6577C3.02356 13.918 2.60145 13.918 2.3411 13.6577C2.08075 13.3973 2.08075 12.9752 2.3411 12.7148L3.28776 11.7682C3.54811 11.5078 3.97022 11.5078 4.23057 11.7682ZM13.6577 3.28521C13.918 3.02486 13.918 2.60275 13.6577 2.3424C13.3973 2.08205 12.9752 2.08205 12.7148 2.3424L11.7682 3.28906C11.5078 3.54941 11.5078 3.97152 11.7682 4.23187C12.0285 4.49222 12.4506 4.49222 12.711 4.23187L13.6577 3.28521Z\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"clipPath\", {\n                                        id: \"clip0_3122_652\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                            width: \"16\",\n                                            height: \"16\",\n                                            fill: \"white\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        input.left\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium \".concat(isChecked ? \"text-primary bg-[#f4f7ff]\" : \"text-body-color\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            width: \"16\",\n                            height: \"16\",\n                            viewBox: \"0 0 16 16\",\n                            className: \"mr-[6px] fill-current\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                clipRule: \"evenodd\",\n                                d: \"M8.0547 1.67334C8.18372 1.90227 8.16622 2.18562 8.01003 2.39693C7.44055 3.16737 7.16651 4.11662 7.23776 5.07203C7.30901 6.02744 7.72081 6.92554 8.39826 7.60299C9.07571 8.28044 9.97381 8.69224 10.9292 8.76349C11.8846 8.83473 12.8339 8.5607 13.6043 7.99122C13.8156 7.83502 14.099 7.81753 14.3279 7.94655C14.5568 8.07556 14.6886 8.32702 14.6644 8.58868C14.5479 9.84957 14.0747 11.0512 13.3002 12.053C12.5256 13.0547 11.4818 13.8152 10.2909 14.2454C9.09992 14.6756 7.81108 14.7577 6.57516 14.4821C5.33925 14.2065 4.20738 13.5846 3.312 12.6892C2.41661 11.7939 1.79475 10.662 1.51917 9.42608C1.24359 8.19017 1.32569 6.90133 1.75588 5.71038C2.18606 4.51942 2.94652 3.47561 3.94828 2.70109C4.95005 1.92656 6.15168 1.45335 7.41257 1.33682C7.67423 1.31264 7.92568 1.44442 8.0547 1.67334ZM6.21151 2.96004C5.6931 3.1476 5.20432 3.41535 4.76384 3.75591C3.96242 4.37553 3.35405 5.21058 3.00991 6.16334C2.66576 7.11611 2.60008 8.14718 2.82054 9.13591C3.04101 10.1246 3.5385 11.0301 4.25481 11.7464C4.97111 12.4627 5.87661 12.9602 6.86534 13.1807C7.85407 13.4012 8.88514 13.3355 9.8379 12.9913C10.7907 12.6472 11.6257 12.0388 12.2453 11.2374C12.5859 10.7969 12.8536 10.3081 13.0412 9.78974C12.3391 10.0437 11.586 10.1495 10.8301 10.0931C9.55619 9.99813 8.35872 9.44907 7.45545 8.5458C6.55218 7.64253 6.00312 6.44506 5.90812 5.17118C5.85174 4.4152 5.9575 3.66212 6.21151 2.96004Z\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        input.right\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Toggle, \"PdRffBkCFcWUm81QKRE1w5zfQEA=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Toggle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toggle);\nvar _c;\n$RefreshReg$(_c, \"Toggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVG9nZ2xlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVrRDtBQUNYO0FBQ3VCO0FBSTlELE1BQU1JLFNBQVM7UUFBQyxFQUFDQyxLQUFLLEVBS3JCOztJQUNDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1Asc0RBQWNBLENBQUNDLHNEQUFZQTtJQUUzRCxNQUFNTyx1QkFBdUI7UUFDM0JILGFBQWEsQ0FBQ0Q7UUFDZEcsWUFBWSxDQUFDRDtJQUNmO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNHO1lBQU1DLFdBQVU7OzhCQUNmLDhEQUFDUDtvQkFDQ1EsTUFBSztvQkFDTEQsV0FBVTtvQkFDVkUsU0FBU1I7b0JBQ1RTLFVBQVVMOzs7Ozs7OEJBRVosOERBQUNNO29CQUNDSixXQUFXLDhFQUVWLE9BREMsQ0FBQ04sWUFBWSw4QkFBOEI7O3NDQUc3Qyw4REFBQ1c7NEJBQ0NDLE9BQU07NEJBQ05DLFFBQU87NEJBQ1BDLFNBQVE7NEJBQ1JSLFdBQVU7OzhDQUVWLDhEQUFDUztvQ0FBRUMsVUFBUzs4Q0FDViw0RUFBQ0M7d0NBQ0NDLFVBQVM7d0NBQ1RDLFVBQVM7d0NBQ1RDLEdBQUU7Ozs7Ozs7Ozs7OzhDQUdOLDhEQUFDQzs4Q0FDQyw0RUFBQ0w7d0NBQVNNLElBQUc7a0RBQ1gsNEVBQUNDOzRDQUFLWCxPQUFNOzRDQUFLQyxRQUFPOzRDQUFLVyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUl2Q3pCLE1BQU0wQixJQUFJOzs7Ozs7OzhCQUViLDhEQUFDZjtvQkFDQ0osV0FBVyw4RUFFVixPQURDTixZQUFZLDhCQUE4Qjs7c0NBRzVDLDhEQUFDVzs0QkFDQ0MsT0FBTTs0QkFDTkMsUUFBTzs0QkFDUEMsU0FBUTs0QkFDUlIsV0FBVTtzQ0FFViw0RUFBQ1c7Z0NBQ0NDLFVBQVM7Z0NBQ1RDLFVBQVM7Z0NBQ1RDLEdBQUU7Ozs7Ozs7Ozs7O3dCQUdMckIsTUFBTTJCLEtBQUs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0dBdkVNNUI7O1FBTzRCRixrREFBY0E7OztLQVAxQ0U7QUF5RU4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2dnbGUudHN4P2FlZTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJ1xuaW1wb3J0IHsgdHJhbnNhY3Rpb25BdG9tLCB0cmFuc2ZlckF0b20gfSBmcm9tICcuLi9zdG9yZS9hdG9tcydcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IFRvZ2dsZSA9ICh7aW5wdXR9OntcbiAgICBpbnB1dDp7XG4gICAgICAgIGxlZnQ6IHN0cmluZyxcbiAgICAgICAgcmlnaHQ6IHN0cmluZyxcbiAgICB9XG59KSA9PiB7XG4gIGNvbnN0IFtpc0NoZWNrZWQsIHNldElzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0cmFuc2Zlciwgc2V0VHJhbnNmZXJdID0gdXNlUmVjb2lsU3RhdGUodHJhbnNmZXJBdG9tKTtcblxuICBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9ICgpID0+IHtcbiAgICBzZXRJc0NoZWNrZWQoIWlzQ2hlY2tlZCk7XG4gICAgc2V0VHJhbnNmZXIoIXRyYW5zZmVyKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3RoZW1lU3dpdGNoZXJUd28gc2hhZG93LWNhcmQgcmVsYXRpdmUgaW5saW5lLWZsZXggY3Vyc29yLXBvaW50ZXIgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYmctd2hpdGUgcC0xJz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgICAgY2xhc3NOYW1lPSdzci1vbmx5J1xuICAgICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hlY2tib3hDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC1bNnB4XSByb3VuZGVkIHB5LTIgcHgtWzE4cHhdIHRleHQtc20gZm9udC1tZWRpdW0gJHtcbiAgICAgICAgICAgICFpc0NoZWNrZWQgPyAndGV4dC1wcmltYXJ5IGJnLVsjZjRmN2ZmXScgOiAndGV4dC1ib2R5LWNvbG9yJ1xuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9JzE2J1xuICAgICAgICAgICAgaGVpZ2h0PScxNidcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAxNiAxNidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbXItWzZweF0gZmlsbC1jdXJyZW50J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxnIGNsaXBQYXRoPSd1cmwoI2NsaXAwXzMxMjJfNjUyKSc+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgZD0nTTggMEM4LjM2ODE5IDAgOC42NjY2NyAwLjI5ODQ3NyA4LjY2NjY3IDAuNjY2NjY3VjJDOC42NjY2NyAyLjM2ODE5IDguMzY4MTkgMi42NjY2NyA4IDIuNjY2NjdDNy42MzE4MSAyLjY2NjY3IDcuMzMzMzMgMi4zNjgxOSA3LjMzMzMzIDJWMC42NjY2NjdDNy4zMzMzMyAwLjI5ODQ3NyA3LjYzMTgxIDAgOCAwWk04IDUuMzMzMzNDNi41MjcyNCA1LjMzMzMzIDUuMzMzMzMgNi41MjcyNCA1LjMzMzMzIDhDNS4zMzMzMyA5LjQ3Mjc2IDYuNTI3MjQgMTAuNjY2NyA4IDEwLjY2NjdDOS40NzI3NiAxMC42NjY3IDEwLjY2NjcgOS40NzI3NiAxMC42NjY3IDhDMTAuNjY2NyA2LjUyNzI0IDkuNDcyNzYgNS4zMzMzMyA4IDUuMzMzMzNaTTQgOEM0IDUuNzkwODYgNS43OTA4NiA0IDggNEMxMC4yMDkxIDQgMTIgNS43OTA4NiAxMiA4QzEyIDEwLjIwOTEgMTAuMjA5MSAxMiA4IDEyQzUuNzkwODYgMTIgNCAxMC4yMDkxIDQgOFpNOC42NjY2NyAxNEM4LjY2NjY3IDEzLjYzMTggOC4zNjgxOSAxMy4zMzMzIDggMTMuMzMzM0M3LjYzMTgxIDEzLjMzMzMgNy4zMzMzMyAxMy42MzE4IDcuMzMzMzMgMTRWMTUuMzMzM0M3LjMzMzMzIDE1LjcwMTUgNy42MzE4MSAxNiA4IDE2QzguMzY4MTkgMTYgOC42NjY2NyAxNS43MDE1IDguNjY2NjcgMTUuMzMzM1YxNFpNMi4zNDExIDIuMzQyNEMyLjYwMTQ1IDIuMDgyMDUgMy4wMjM1NiAyLjA4MjA1IDMuMjgzOTEgMi4zNDI0TDQuMjMwNTcgMy4yODkwNkM0LjQ5MDkyIDMuNTQ5NDEgNC40OTA5MiAzLjk3MTUyIDQuMjMwNTcgNC4yMzE4N0MzLjk3MDIyIDQuNDkyMjIgMy41NDgxMSA0LjQ5MjIyIDMuMjg3NzYgNC4yMzE4N0wyLjM0MTEgMy4yODUyMUMyLjA4MDc1IDMuMDI0ODYgMi4wODA3NSAyLjYwMjc1IDIuMzQxMSAyLjM0MjRaTTEyLjcxMSAxMS43NjgyQzEyLjQ1MDYgMTEuNTA3OCAxMi4wMjg1IDExLjUwNzggMTEuNzY4MiAxMS43NjgyQzExLjUwNzggMTIuMDI4NSAxMS41MDc4IDEyLjQ1MDYgMTEuNzY4MiAxMi43MTFMMTIuNzE0OCAxMy42NTc3QzEyLjk3NTIgMTMuOTE4IDEzLjM5NzMgMTMuOTE4IDEzLjY1NzcgMTMuNjU3N0MxMy45MTggMTMuMzk3MyAxMy45MTggMTIuOTc1MiAxMy42NTc3IDEyLjcxNDhMMTIuNzExIDExLjc2ODJaTTAgOEMwIDcuNjMxODEgMC4yOTg0NzcgNy4zMzMzMyAwLjY2NjY2NyA3LjMzMzMzSDJDMi4zNjgxOSA3LjMzMzMzIDIuNjY2NjcgNy42MzE4MSAyLjY2NjY3IDhDMi42NjY2NyA4LjM2ODE5IDIuMzY4MTkgOC42NjY2NyAyIDguNjY2NjdIMC42NjY2NjdDMC4yOTg0NzcgOC42NjY2NyAwIDguMzY4MTkgMCA4Wk0xNCA3LjMzMzMzQzEzLjYzMTggNy4zMzMzMyAxMy4zMzMzIDcuNjMxODEgMTMuMzMzMyA4QzEzLjMzMzMgOC4zNjgxOSAxMy42MzE4IDguNjY2NjcgMTQgOC42NjY2N0gxNS4zMzMzQzE1LjcwMTUgOC42NjY2NyAxNiA4LjM2ODE5IDE2IDhDMTYgNy42MzE4MSAxNS43MDE1IDcuMzMzMzMgMTUuMzMzMyA3LjMzMzMzSDE0Wk00LjIzMDU3IDExLjc2ODJDNC40OTA5MiAxMi4wMjg1IDQuNDkwOTIgMTIuNDUwNiA0LjIzMDU3IDEyLjcxMUwzLjI4MzkxIDEzLjY1NzdDMy4wMjM1NiAxMy45MTggMi42MDE0NSAxMy45MTggMi4zNDExIDEzLjY1NzdDMi4wODA3NSAxMy4zOTczIDIuMDgwNzUgMTIuOTc1MiAyLjM0MTEgMTIuNzE0OEwzLjI4Nzc2IDExLjc2ODJDMy41NDgxMSAxMS41MDc4IDMuOTcwMjIgMTEuNTA3OCA0LjIzMDU3IDExLjc2ODJaTTEzLjY1NzcgMy4yODUyMUMxMy45MTggMy4wMjQ4NiAxMy45MTggMi42MDI3NSAxMy42NTc3IDIuMzQyNEMxMy4zOTczIDIuMDgyMDUgMTIuOTc1MiAyLjA4MjA1IDEyLjcxNDggMi4zNDI0TDExLjc2ODIgMy4yODkwNkMxMS41MDc4IDMuNTQ5NDEgMTEuNTA3OCAzLjk3MTUyIDExLjc2ODIgNC4yMzE4N0MxMi4wMjg1IDQuNDkyMjIgMTIuNDUwNiA0LjQ5MjIyIDEyLjcxMSA0LjIzMTg3TDEzLjY1NzcgMy4yODUyMVonXG4gICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgPGNsaXBQYXRoIGlkPSdjbGlwMF8zMTIyXzY1Mic+XG4gICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxuICAgICAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIHtpbnB1dC5sZWZ0fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC1bNnB4XSByb3VuZGVkIHB5LTIgcHgtWzE4cHhdIHRleHQtc20gZm9udC1tZWRpdW0gJHtcbiAgICAgICAgICAgIGlzQ2hlY2tlZCA/ICd0ZXh0LXByaW1hcnkgYmctWyNmNGY3ZmZdJyA6ICd0ZXh0LWJvZHktY29sb3InXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD0nMTYnXG4gICAgICAgICAgICBoZWlnaHQ9JzE2J1xuICAgICAgICAgICAgdmlld0JveD0nMCAwIDE2IDE2J1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdtci1bNnB4XSBmaWxsLWN1cnJlbnQnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICBkPSdNOC4wNTQ3IDEuNjczMzRDOC4xODM3MiAxLjkwMjI3IDguMTY2MjIgMi4xODU2MiA4LjAxMDAzIDIuMzk2OTNDNy40NDA1NSAzLjE2NzM3IDcuMTY2NTEgNC4xMTY2MiA3LjIzNzc2IDUuMDcyMDNDNy4zMDkwMSA2LjAyNzQ0IDcuNzIwODEgNi45MjU1NCA4LjM5ODI2IDcuNjAyOTlDOS4wNzU3MSA4LjI4MDQ0IDkuOTczODEgOC42OTIyNCAxMC45MjkyIDguNzYzNDlDMTEuODg0NiA4LjgzNDczIDEyLjgzMzkgOC41NjA3IDEzLjYwNDMgNy45OTEyMkMxMy44MTU2IDcuODM1MDIgMTQuMDk5IDcuODE3NTMgMTQuMzI3OSA3Ljk0NjU1QzE0LjU1NjggOC4wNzU1NiAxNC42ODg2IDguMzI3MDIgMTQuNjY0NCA4LjU4ODY4QzE0LjU0NzkgOS44NDk1NyAxNC4wNzQ3IDExLjA1MTIgMTMuMzAwMiAxMi4wNTNDMTIuNTI1NiAxMy4wNTQ3IDExLjQ4MTggMTMuODE1MiAxMC4yOTA5IDE0LjI0NTRDOS4wOTk5MiAxNC42NzU2IDcuODExMDggMTQuNzU3NyA2LjU3NTE2IDE0LjQ4MjFDNS4zMzkyNSAxNC4yMDY1IDQuMjA3MzggMTMuNTg0NiAzLjMxMiAxMi42ODkyQzIuNDE2NjEgMTEuNzkzOSAxLjc5NDc1IDEwLjY2MiAxLjUxOTE3IDkuNDI2MDhDMS4yNDM1OSA4LjE5MDE3IDEuMzI1NjkgNi45MDEzMyAxLjc1NTg4IDUuNzEwMzhDMi4xODYwNiA0LjUxOTQyIDIuOTQ2NTIgMy40NzU2MSAzLjk0ODI4IDIuNzAxMDlDNC45NTAwNSAxLjkyNjU2IDYuMTUxNjggMS40NTMzNSA3LjQxMjU3IDEuMzM2ODJDNy42NzQyMyAxLjMxMjY0IDcuOTI1NjggMS40NDQ0MiA4LjA1NDcgMS42NzMzNFpNNi4yMTE1MSAyLjk2MDA0QzUuNjkzMSAzLjE0NzYgNS4yMDQzMiAzLjQxNTM1IDQuNzYzODQgMy43NTU5MUMzLjk2MjQyIDQuMzc1NTMgMy4zNTQwNSA1LjIxMDU4IDMuMDA5OTEgNi4xNjMzNEMyLjY2NTc2IDcuMTE2MTEgMi42MDAwOCA4LjE0NzE4IDIuODIwNTQgOS4xMzU5MUMzLjA0MTAxIDEwLjEyNDYgMy41Mzg1IDExLjAzMDEgNC4yNTQ4MSAxMS43NDY0QzQuOTcxMTEgMTIuNDYyNyA1Ljg3NjYxIDEyLjk2MDIgNi44NjUzNCAxMy4xODA3QzcuODU0MDcgMTMuNDAxMiA4Ljg4NTE0IDEzLjMzNTUgOS44Mzc5IDEyLjk5MTNDMTAuNzkwNyAxMi42NDcyIDExLjYyNTcgMTIuMDM4OCAxMi4yNDUzIDExLjIzNzRDMTIuNTg1OSAxMC43OTY5IDEyLjg1MzYgMTAuMzA4MSAxMy4wNDEyIDkuNzg5NzRDMTIuMzM5MSAxMC4wNDM3IDExLjU4NiAxMC4xNDk1IDEwLjgzMDEgMTAuMDkzMUM5LjU1NjE5IDkuOTk4MTMgOC4zNTg3MiA5LjQ0OTA3IDcuNDU1NDUgOC41NDU4QzYuNTUyMTggNy42NDI1MyA2LjAwMzEyIDYuNDQ1MDYgNS45MDgxMiA1LjE3MTE4QzUuODUxNzQgNC40MTUyIDUuOTU3NSAzLjY2MjEyIDYuMjExNTEgMi45NjAwNFonXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIHtpbnB1dC5yaWdodH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJ0cmFuc2ZlckF0b20iLCJUb2dnbGUiLCJpbnB1dCIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsInRyYW5zZmVyIiwic2V0VHJhbnNmZXIiLCJoYW5kbGVDaGVja2JveENoYW5nZSIsImxhYmVsIiwiY2xhc3NOYW1lIiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsInNwYW4iLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJnIiwiY2xpcFBhdGgiLCJwYXRoIiwiZmlsbFJ1bGUiLCJjbGlwUnVsZSIsImQiLCJkZWZzIiwiaWQiLCJyZWN0IiwiZmlsbCIsImxlZnQiLCJyaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Toggle.tsx\n"));

/***/ })

});