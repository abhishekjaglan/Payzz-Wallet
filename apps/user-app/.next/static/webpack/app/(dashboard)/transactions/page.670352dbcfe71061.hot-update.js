"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/transactions/page",{

/***/ "(app-pages-browser)/./components/Toggle.tsx":
/*!*******************************!*\
  !*** ./components/Toggle.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/../../node_modules/next/dist/api/router.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Toggle = (param)=>{\n    let { input } = param;\n    _s();\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        router.push(\"../dashboard/transactions/deposit\");\n    }, []);\n    const handleCheckboxChange = ()=>{\n        setIsChecked(!isChecked);\n        if (isChecked) {\n            router.push(\"../dashboard/transactions/deposit\");\n        } else {\n            router.push(\"../dashboard/transactions/withdrawl\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            className: \"themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    className: \"sr-only\",\n                    checked: isChecked,\n                    onChange: handleCheckboxChange\n                }, void 0, false, {\n                    fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium \".concat(!isChecked ? \"text-primary bg-[#f4f7ff]\" : \"text-body-color\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            width: \"16\",\n                            height: \"16\",\n                            viewBox: \"0 0 16 16\",\n                            className: \"mr-[6px] fill-current\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                    clipPath: \"url(#clip0_3122_652)\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fillRule: \"evenodd\",\n                                        clipRule: \"evenodd\",\n                                        d: \"M8 0C8.36819 0 8.66667 0.298477 8.66667 0.666667V2C8.66667 2.36819 8.36819 2.66667 8 2.66667C7.63181 2.66667 7.33333 2.36819 7.33333 2V0.666667C7.33333 0.298477 7.63181 0 8 0ZM8 5.33333C6.52724 5.33333 5.33333 6.52724 5.33333 8C5.33333 9.47276 6.52724 10.6667 8 10.6667C9.47276 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.47276 5.33333 8 5.33333ZM4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8ZM8.66667 14C8.66667 13.6318 8.36819 13.3333 8 13.3333C7.63181 13.3333 7.33333 13.6318 7.33333 14V15.3333C7.33333 15.7015 7.63181 16 8 16C8.36819 16 8.66667 15.7015 8.66667 15.3333V14ZM2.3411 2.3424C2.60145 2.08205 3.02356 2.08205 3.28391 2.3424L4.23057 3.28906C4.49092 3.54941 4.49092 3.97152 4.23057 4.23187C3.97022 4.49222 3.54811 4.49222 3.28776 4.23187L2.3411 3.28521C2.08075 3.02486 2.08075 2.60275 2.3411 2.3424ZM12.711 11.7682C12.4506 11.5078 12.0285 11.5078 11.7682 11.7682C11.5078 12.0285 11.5078 12.4506 11.7682 12.711L12.7148 13.6577C12.9752 13.918 13.3973 13.918 13.6577 13.6577C13.918 13.3973 13.918 12.9752 13.6577 12.7148L12.711 11.7682ZM0 8C0 7.63181 0.298477 7.33333 0.666667 7.33333H2C2.36819 7.33333 2.66667 7.63181 2.66667 8C2.66667 8.36819 2.36819 8.66667 2 8.66667H0.666667C0.298477 8.66667 0 8.36819 0 8ZM14 7.33333C13.6318 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.6318 8.66667 14 8.66667H15.3333C15.7015 8.66667 16 8.36819 16 8C16 7.63181 15.7015 7.33333 15.3333 7.33333H14ZM4.23057 11.7682C4.49092 12.0285 4.49092 12.4506 4.23057 12.711L3.28391 13.6577C3.02356 13.918 2.60145 13.918 2.3411 13.6577C2.08075 13.3973 2.08075 12.9752 2.3411 12.7148L3.28776 11.7682C3.54811 11.5078 3.97022 11.5078 4.23057 11.7682ZM13.6577 3.28521C13.918 3.02486 13.918 2.60275 13.6577 2.3424C13.3973 2.08205 12.9752 2.08205 12.7148 2.3424L11.7682 3.28906C11.5078 3.54941 11.5078 3.97152 11.7682 4.23187C12.0285 4.49222 12.4506 4.49222 12.711 4.23187L13.6577 3.28521Z\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"clipPath\", {\n                                        id: \"clip0_3122_652\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                            width: \"16\",\n                                            height: \"16\",\n                                            fill: \"white\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        input.left\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium \".concat(isChecked ? \"text-primary bg-[#f4f7ff]\" : \"text-body-color\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            width: \"16\",\n                            height: \"16\",\n                            viewBox: \"0 0 16 16\",\n                            className: \"mr-[6px] fill-current\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                clipRule: \"evenodd\",\n                                d: \"M8.0547 1.67334C8.18372 1.90227 8.16622 2.18562 8.01003 2.39693C7.44055 3.16737 7.16651 4.11662 7.23776 5.07203C7.30901 6.02744 7.72081 6.92554 8.39826 7.60299C9.07571 8.28044 9.97381 8.69224 10.9292 8.76349C11.8846 8.83473 12.8339 8.5607 13.6043 7.99122C13.8156 7.83502 14.099 7.81753 14.3279 7.94655C14.5568 8.07556 14.6886 8.32702 14.6644 8.58868C14.5479 9.84957 14.0747 11.0512 13.3002 12.053C12.5256 13.0547 11.4818 13.8152 10.2909 14.2454C9.09992 14.6756 7.81108 14.7577 6.57516 14.4821C5.33925 14.2065 4.20738 13.5846 3.312 12.6892C2.41661 11.7939 1.79475 10.662 1.51917 9.42608C1.24359 8.19017 1.32569 6.90133 1.75588 5.71038C2.18606 4.51942 2.94652 3.47561 3.94828 2.70109C4.95005 1.92656 6.15168 1.45335 7.41257 1.33682C7.67423 1.31264 7.92568 1.44442 8.0547 1.67334ZM6.21151 2.96004C5.6931 3.1476 5.20432 3.41535 4.76384 3.75591C3.96242 4.37553 3.35405 5.21058 3.00991 6.16334C2.66576 7.11611 2.60008 8.14718 2.82054 9.13591C3.04101 10.1246 3.5385 11.0301 4.25481 11.7464C4.97111 12.4627 5.87661 12.9602 6.86534 13.1807C7.85407 13.4012 8.88514 13.3355 9.8379 12.9913C10.7907 12.6472 11.6257 12.0388 12.2453 11.2374C12.5859 10.7969 12.8536 10.3081 13.0412 9.78974C12.3391 10.0437 11.586 10.1495 10.8301 10.0931C9.55619 9.99813 8.35872 9.44907 7.45545 8.5458C6.55218 7.64253 6.00312 6.44506 5.90812 5.17118C5.85174 4.4152 5.9575 3.66212 6.21151 2.96004Z\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined),\n                        input.right\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/components/Toggle.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Toggle, \"P47gim7uL+6PcZtdB7HBI+xOmks=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Toggle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toggle);\nvar _c;\n$RefreshReg$(_c, \"Toggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVG9nZ2xlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWtEO0FBSVg7QUFFdkMsTUFBTUksU0FBUztRQUFDLEVBQUNDLEtBQUssRUFLckI7O0lBQ0MsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1NLFNBQVNMLHNEQUFTQTtJQUV4QkYsZ0RBQVNBLENBQUM7UUFDUk8sT0FBT0MsSUFBSSxDQUFDO0lBQ2QsR0FBRyxFQUFFO0lBRUwsTUFBTUMsdUJBQXVCO1FBQzNCSCxhQUFhLENBQUNEO1FBQ2QsSUFBR0EsV0FBVTtZQUVURSxPQUFPQyxJQUFJLENBQUM7UUFDaEIsT0FBSztZQUNERCxPQUFPQyxJQUFJLENBQUM7UUFDaEI7SUFDRjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDRTtZQUFNQyxXQUFVOzs4QkFDZiw4REFBQ1A7b0JBQ0NRLE1BQUs7b0JBQ0xELFdBQVU7b0JBQ1ZFLFNBQVNSO29CQUNUUyxVQUFVTDs7Ozs7OzhCQUVaLDhEQUFDTTtvQkFDQ0osV0FBVyw4RUFFVixPQURDLENBQUNOLFlBQVksOEJBQThCOztzQ0FHN0MsOERBQUNXOzRCQUNDQyxPQUFNOzRCQUNOQyxRQUFPOzRCQUNQQyxTQUFROzRCQUNSUixXQUFVOzs4Q0FFViw4REFBQ1M7b0NBQUVDLFVBQVM7OENBQ1YsNEVBQUNDO3dDQUNDQyxVQUFTO3dDQUNUQyxVQUFTO3dDQUNUQyxHQUFFOzs7Ozs7Ozs7Ozs4Q0FHTiw4REFBQ0M7OENBQ0MsNEVBQUNMO3dDQUFTTSxJQUFHO2tEQUNYLDRFQUFDQzs0Q0FBS1gsT0FBTTs0Q0FBS0MsUUFBTzs0Q0FBS1csTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFJdkN6QixNQUFNMEIsSUFBSTs7Ozs7Ozs4QkFFYiw4REFBQ2Y7b0JBQ0NKLFdBQVcsOEVBRVYsT0FEQ04sWUFBWSw4QkFBOEI7O3NDQUc1Qyw4REFBQ1c7NEJBQ0NDLE9BQU07NEJBQ05DLFFBQU87NEJBQ1BDLFNBQVE7NEJBQ1JSLFdBQVU7c0NBRVYsNEVBQUNXO2dDQUNDQyxVQUFTO2dDQUNUQyxVQUFTO2dDQUNUQyxHQUFFOzs7Ozs7Ozs7Ozt3QkFHTHJCLE1BQU0yQixLQUFLOzs7Ozs7Ozs7Ozs7OztBQUt0QjtHQWhGTTVCOztRQU9XRCxrREFBU0E7OztLQVBwQkM7QUFrRk4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2dnbGUudHN4P2FlZTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJ1xuaW1wb3J0IHsgdHJhbnNhY3Rpb25BdG9tLCB0cmFuc2ZlckF0b20gfSBmcm9tICcuLi9zdG9yZS9hdG9tcydcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IFRvZ2dsZSA9ICh7aW5wdXR9OntcbiAgICBpbnB1dDp7XG4gICAgICAgIGxlZnQ6IHN0cmluZyxcbiAgICAgICAgcmlnaHQ6IHN0cmluZyxcbiAgICB9XG59KSA9PiB7XG4gIGNvbnN0IFtpc0NoZWNrZWQsIHNldElzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goJy4uL2Rhc2hib2FyZC90cmFuc2FjdGlvbnMvZGVwb3NpdCcpO1xuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9ICgpID0+IHtcbiAgICBzZXRJc0NoZWNrZWQoIWlzQ2hlY2tlZCk7XG4gICAgaWYoaXNDaGVja2VkKXtcblxuICAgICAgICByb3V0ZXIucHVzaCgnLi4vZGFzaGJvYXJkL3RyYW5zYWN0aW9ucy9kZXBvc2l0JylcbiAgICB9ZWxzZXtcbiAgICAgICAgcm91dGVyLnB1c2goJy4uL2Rhc2hib2FyZC90cmFuc2FjdGlvbnMvd2l0aGRyYXdsJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPSd0aGVtZVN3aXRjaGVyVHdvIHNoYWRvdy1jYXJkIHJlbGF0aXZlIGlubGluZS1mbGV4IGN1cnNvci1wb2ludGVyIHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJnLXdoaXRlIHAtMSc+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgIGNsYXNzTmFtZT0nc3Itb25seSdcbiAgICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrYm94Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtWzZweF0gcm91bmRlZCBweS0yIHB4LVsxOHB4XSB0ZXh0LXNtIGZvbnQtbWVkaXVtICR7XG4gICAgICAgICAgICAhaXNDaGVja2VkID8gJ3RleHQtcHJpbWFyeSBiZy1bI2Y0ZjdmZl0nIDogJ3RleHQtYm9keS1jb2xvcidcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPScxNidcbiAgICAgICAgICAgIGhlaWdodD0nMTYnXG4gICAgICAgICAgICB2aWV3Qm94PScwIDAgMTYgMTYnXG4gICAgICAgICAgICBjbGFzc05hbWU9J21yLVs2cHhdIGZpbGwtY3VycmVudCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZyBjbGlwUGF0aD0ndXJsKCNjbGlwMF8zMTIyXzY1MiknPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgIGQ9J004IDBDOC4zNjgxOSAwIDguNjY2NjcgMC4yOTg0NzcgOC42NjY2NyAwLjY2NjY2N1YyQzguNjY2NjcgMi4zNjgxOSA4LjM2ODE5IDIuNjY2NjcgOCAyLjY2NjY3QzcuNjMxODEgMi42NjY2NyA3LjMzMzMzIDIuMzY4MTkgNy4zMzMzMyAyVjAuNjY2NjY3QzcuMzMzMzMgMC4yOTg0NzcgNy42MzE4MSAwIDggMFpNOCA1LjMzMzMzQzYuNTI3MjQgNS4zMzMzMyA1LjMzMzMzIDYuNTI3MjQgNS4zMzMzMyA4QzUuMzMzMzMgOS40NzI3NiA2LjUyNzI0IDEwLjY2NjcgOCAxMC42NjY3QzkuNDcyNzYgMTAuNjY2NyAxMC42NjY3IDkuNDcyNzYgMTAuNjY2NyA4QzEwLjY2NjcgNi41MjcyNCA5LjQ3Mjc2IDUuMzMzMzMgOCA1LjMzMzMzWk00IDhDNCA1Ljc5MDg2IDUuNzkwODYgNCA4IDRDMTAuMjA5MSA0IDEyIDUuNzkwODYgMTIgOEMxMiAxMC4yMDkxIDEwLjIwOTEgMTIgOCAxMkM1Ljc5MDg2IDEyIDQgMTAuMjA5MSA0IDhaTTguNjY2NjcgMTRDOC42NjY2NyAxMy42MzE4IDguMzY4MTkgMTMuMzMzMyA4IDEzLjMzMzNDNy42MzE4MSAxMy4zMzMzIDcuMzMzMzMgMTMuNjMxOCA3LjMzMzMzIDE0VjE1LjMzMzNDNy4zMzMzMyAxNS43MDE1IDcuNjMxODEgMTYgOCAxNkM4LjM2ODE5IDE2IDguNjY2NjcgMTUuNzAxNSA4LjY2NjY3IDE1LjMzMzNWMTRaTTIuMzQxMSAyLjM0MjRDMi42MDE0NSAyLjA4MjA1IDMuMDIzNTYgMi4wODIwNSAzLjI4MzkxIDIuMzQyNEw0LjIzMDU3IDMuMjg5MDZDNC40OTA5MiAzLjU0OTQxIDQuNDkwOTIgMy45NzE1MiA0LjIzMDU3IDQuMjMxODdDMy45NzAyMiA0LjQ5MjIyIDMuNTQ4MTEgNC40OTIyMiAzLjI4Nzc2IDQuMjMxODdMMi4zNDExIDMuMjg1MjFDMi4wODA3NSAzLjAyNDg2IDIuMDgwNzUgMi42MDI3NSAyLjM0MTEgMi4zNDI0Wk0xMi43MTEgMTEuNzY4MkMxMi40NTA2IDExLjUwNzggMTIuMDI4NSAxMS41MDc4IDExLjc2ODIgMTEuNzY4MkMxMS41MDc4IDEyLjAyODUgMTEuNTA3OCAxMi40NTA2IDExLjc2ODIgMTIuNzExTDEyLjcxNDggMTMuNjU3N0MxMi45NzUyIDEzLjkxOCAxMy4zOTczIDEzLjkxOCAxMy42NTc3IDEzLjY1NzdDMTMuOTE4IDEzLjM5NzMgMTMuOTE4IDEyLjk3NTIgMTMuNjU3NyAxMi43MTQ4TDEyLjcxMSAxMS43NjgyWk0wIDhDMCA3LjYzMTgxIDAuMjk4NDc3IDcuMzMzMzMgMC42NjY2NjcgNy4zMzMzM0gyQzIuMzY4MTkgNy4zMzMzMyAyLjY2NjY3IDcuNjMxODEgMi42NjY2NyA4QzIuNjY2NjcgOC4zNjgxOSAyLjM2ODE5IDguNjY2NjcgMiA4LjY2NjY3SDAuNjY2NjY3QzAuMjk4NDc3IDguNjY2NjcgMCA4LjM2ODE5IDAgOFpNMTQgNy4zMzMzM0MxMy42MzE4IDcuMzMzMzMgMTMuMzMzMyA3LjYzMTgxIDEzLjMzMzMgOEMxMy4zMzMzIDguMzY4MTkgMTMuNjMxOCA4LjY2NjY3IDE0IDguNjY2NjdIMTUuMzMzM0MxNS43MDE1IDguNjY2NjcgMTYgOC4zNjgxOSAxNiA4QzE2IDcuNjMxODEgMTUuNzAxNSA3LjMzMzMzIDE1LjMzMzMgNy4zMzMzM0gxNFpNNC4yMzA1NyAxMS43NjgyQzQuNDkwOTIgMTIuMDI4NSA0LjQ5MDkyIDEyLjQ1MDYgNC4yMzA1NyAxMi43MTFMMy4yODM5MSAxMy42NTc3QzMuMDIzNTYgMTMuOTE4IDIuNjAxNDUgMTMuOTE4IDIuMzQxMSAxMy42NTc3QzIuMDgwNzUgMTMuMzk3MyAyLjA4MDc1IDEyLjk3NTIgMi4zNDExIDEyLjcxNDhMMy4yODc3NiAxMS43NjgyQzMuNTQ4MTEgMTEuNTA3OCAzLjk3MDIyIDExLjUwNzggNC4yMzA1NyAxMS43NjgyWk0xMy42NTc3IDMuMjg1MjFDMTMuOTE4IDMuMDI0ODYgMTMuOTE4IDIuNjAyNzUgMTMuNjU3NyAyLjM0MjRDMTMuMzk3MyAyLjA4MjA1IDEyLjk3NTIgMi4wODIwNSAxMi43MTQ4IDIuMzQyNEwxMS43NjgyIDMuMjg5MDZDMTEuNTA3OCAzLjU0OTQxIDExLjUwNzggMy45NzE1MiAxMS43NjgyIDQuMjMxODdDMTIuMDI4NSA0LjQ5MjIyIDEyLjQ1MDYgNC40OTIyMiAxMi43MTEgNC4yMzE4N0wxMy42NTc3IDMuMjg1MjFaJ1xuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgIDxjbGlwUGF0aCBpZD0nY2xpcDBfMzEyMl82NTInPlxuICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPScxNicgaGVpZ2h0PScxNicgZmlsbD0nd2hpdGUnPjwvcmVjdD5cbiAgICAgICAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICB7aW5wdXQubGVmdH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtWzZweF0gcm91bmRlZCBweS0yIHB4LVsxOHB4XSB0ZXh0LXNtIGZvbnQtbWVkaXVtICR7XG4gICAgICAgICAgICBpc0NoZWNrZWQgPyAndGV4dC1wcmltYXJ5IGJnLVsjZjRmN2ZmXScgOiAndGV4dC1ib2R5LWNvbG9yJ1xuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9JzE2J1xuICAgICAgICAgICAgaGVpZ2h0PScxNidcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAxNiAxNidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbXItWzZweF0gZmlsbC1jdXJyZW50J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgZD0nTTguMDU0NyAxLjY3MzM0QzguMTgzNzIgMS45MDIyNyA4LjE2NjIyIDIuMTg1NjIgOC4wMTAwMyAyLjM5NjkzQzcuNDQwNTUgMy4xNjczNyA3LjE2NjUxIDQuMTE2NjIgNy4yMzc3NiA1LjA3MjAzQzcuMzA5MDEgNi4wMjc0NCA3LjcyMDgxIDYuOTI1NTQgOC4zOTgyNiA3LjYwMjk5QzkuMDc1NzEgOC4yODA0NCA5Ljk3MzgxIDguNjkyMjQgMTAuOTI5MiA4Ljc2MzQ5QzExLjg4NDYgOC44MzQ3MyAxMi44MzM5IDguNTYwNyAxMy42MDQzIDcuOTkxMjJDMTMuODE1NiA3LjgzNTAyIDE0LjA5OSA3LjgxNzUzIDE0LjMyNzkgNy45NDY1NUMxNC41NTY4IDguMDc1NTYgMTQuNjg4NiA4LjMyNzAyIDE0LjY2NDQgOC41ODg2OEMxNC41NDc5IDkuODQ5NTcgMTQuMDc0NyAxMS4wNTEyIDEzLjMwMDIgMTIuMDUzQzEyLjUyNTYgMTMuMDU0NyAxMS40ODE4IDEzLjgxNTIgMTAuMjkwOSAxNC4yNDU0QzkuMDk5OTIgMTQuNjc1NiA3LjgxMTA4IDE0Ljc1NzcgNi41NzUxNiAxNC40ODIxQzUuMzM5MjUgMTQuMjA2NSA0LjIwNzM4IDEzLjU4NDYgMy4zMTIgMTIuNjg5MkMyLjQxNjYxIDExLjc5MzkgMS43OTQ3NSAxMC42NjIgMS41MTkxNyA5LjQyNjA4QzEuMjQzNTkgOC4xOTAxNyAxLjMyNTY5IDYuOTAxMzMgMS43NTU4OCA1LjcxMDM4QzIuMTg2MDYgNC41MTk0MiAyLjk0NjUyIDMuNDc1NjEgMy45NDgyOCAyLjcwMTA5QzQuOTUwMDUgMS45MjY1NiA2LjE1MTY4IDEuNDUzMzUgNy40MTI1NyAxLjMzNjgyQzcuNjc0MjMgMS4zMTI2NCA3LjkyNTY4IDEuNDQ0NDIgOC4wNTQ3IDEuNjczMzRaTTYuMjExNTEgMi45NjAwNEM1LjY5MzEgMy4xNDc2IDUuMjA0MzIgMy40MTUzNSA0Ljc2Mzg0IDMuNzU1OTFDMy45NjI0MiA0LjM3NTUzIDMuMzU0MDUgNS4yMTA1OCAzLjAwOTkxIDYuMTYzMzRDMi42NjU3NiA3LjExNjExIDIuNjAwMDggOC4xNDcxOCAyLjgyMDU0IDkuMTM1OTFDMy4wNDEwMSAxMC4xMjQ2IDMuNTM4NSAxMS4wMzAxIDQuMjU0ODEgMTEuNzQ2NEM0Ljk3MTExIDEyLjQ2MjcgNS44NzY2MSAxMi45NjAyIDYuODY1MzQgMTMuMTgwN0M3Ljg1NDA3IDEzLjQwMTIgOC44ODUxNCAxMy4zMzU1IDkuODM3OSAxMi45OTEzQzEwLjc5MDcgMTIuNjQ3MiAxMS42MjU3IDEyLjAzODggMTIuMjQ1MyAxMS4yMzc0QzEyLjU4NTkgMTAuNzk2OSAxMi44NTM2IDEwLjMwODEgMTMuMDQxMiA5Ljc4OTc0QzEyLjMzOTEgMTAuMDQzNyAxMS41ODYgMTAuMTQ5NSAxMC44MzAxIDEwLjA5MzFDOS41NTYxOSA5Ljk5ODEzIDguMzU4NzIgOS40NDkwNyA3LjQ1NTQ1IDguNTQ1OEM2LjU1MjE4IDcuNjQyNTMgNi4wMDMxMiA2LjQ0NTA2IDUuOTA4MTIgNS4xNzExOEM1Ljg1MTc0IDQuNDE1MiA1Ljk1NzUgMy42NjIxMiA2LjIxMTUxIDIuOTYwMDRaJ1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICB7aW5wdXQucmlnaHR9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlRvZ2dsZSIsImlucHV0IiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwicm91dGVyIiwicHVzaCIsImhhbmRsZUNoZWNrYm94Q2hhbmdlIiwibGFiZWwiLCJjbGFzc05hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwic3BhbiIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImciLCJjbGlwUGF0aCIsInBhdGgiLCJmaWxsUnVsZSIsImNsaXBSdWxlIiwiZCIsImRlZnMiLCJpZCIsInJlY3QiLCJmaWxsIiwibGVmdCIsInJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Toggle.tsx\n"));

/***/ })

});