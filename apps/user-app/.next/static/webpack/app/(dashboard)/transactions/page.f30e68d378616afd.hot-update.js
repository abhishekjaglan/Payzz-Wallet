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

/***/ "(app-pages-browser)/./app/(dashboard)/transactions/page.tsx":
/*!***********************************************!*\
  !*** ./app/(dashboard)/transactions/page.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Toggle */ \"(app-pages-browser)/./components/Toggle.tsx\");\n/* harmony import */ var _store_atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/atoms */ \"(app-pages-browser)/./store/atoms.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/../../node_modules/recoil/es/index.js\");\n/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/server/api-utils */ \"(app-pages-browser)/../../node_modules/next/dist/server/api-utils/index.js\");\n/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n// async function getBalance() {\n//     const session = await getServerSession(authOptions);\n//     const balance = await prisma.balance.findFirst({\n//         where: {\n//             userId: Number(session?.user?.id)\n//         }\n//     });\n//     return {\n//         amount: balance?.amount || 0,\n//         locked: balance?.locked || 0\n//     }\n// }\n// async function getOnRampTransactions() {\n//     const session = await getServerSession(authOptions);\n//     const txns = await prisma.onRampTransaction.findMany({\n//         where: {\n//             userId: Number(session?.user?.id)\n//         }\n//     });\n//     return txns.map(t => ({\n//         time: t.startTime,\n//         amount: t.amount,\n//         status: t.status,\n//         provider: t.provider\n//     }))\n// }\n// export default async function() {\n//     const balance = await getBalance();\n//     const transactions = await getOnRampTransactions();\n//     return <div className=\"w-screen flex flex-col\">\n//         <div className=\"text-4xl text-[#6a51a6] pt-8 mb-8 font-bold\">\n//             Transactions\n//         </div>\n//         <div>\n//             <Toggle input={{left: \"Deposit\", right: \"Withdrawl\"}}/>\n//         </div>\n//         <div>\n//             <div className=\"grid grid-cols-1 gap-4 md:grid-cols-2 p-4\">\n//                 <div>\n//                     <AddMoney />\n//                 </div>\n//                 <div>\n//                     <BalanceCard amount={balance.amount} locked={balance.locked} />\n//                     <div className=\"pt-4\">\n//                         <OnRampTransactions transactions={transactions} />\n//                     </div>\n//                 </div>\n//             </div>\n//         </div>\n//     </div>\n// }\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    const [transfer, setTransfer] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_store_atoms__WEBPACK_IMPORTED_MODULE_2__.transferAtom);\n    // const router = useRouter();\n    // if(transfer){\n    //     return (\n    //         <div>\n    //             Deposit\n    //         </div>\n    //     )\n    // }else{\n    //     return (\n    //         <div>\n    //             Withdrawl\n    //         </div>\n    //     )\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Toggle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                input: {\n                    left: \"Deposit\",\n                    right: \"Withdrawl\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/app/(dashboard)/transactions/page.tsx\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this),\n            transfer == true ? (0,next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_4__.redirect)(\"/deposit\") : (0,next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_4__.redirect)(\"/withdrawl\")\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/app/(dashboard)/transactions/page.tsx\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS90cmFuc2FjdGlvbnMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRZ0Q7QUFDcUI7QUFDN0I7QUFFYztBQUV0RCxnQ0FBZ0M7QUFDaEMsMkRBQTJEO0FBQzNELHVEQUF1RDtBQUN2RCxtQkFBbUI7QUFDbkIsZ0RBQWdEO0FBQ2hELFlBQVk7QUFDWixVQUFVO0FBQ1YsZUFBZTtBQUNmLHdDQUF3QztBQUN4Qyx1Q0FBdUM7QUFDdkMsUUFBUTtBQUNSLElBQUk7QUFFSiwyQ0FBMkM7QUFDM0MsMkRBQTJEO0FBQzNELDZEQUE2RDtBQUM3RCxtQkFBbUI7QUFDbkIsZ0RBQWdEO0FBQ2hELFlBQVk7QUFDWixVQUFVO0FBQ1YsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLCtCQUErQjtBQUMvQixVQUFVO0FBQ1YsSUFBSTtBQUVKLG9DQUFvQztBQUNwQywwQ0FBMEM7QUFDMUMsMERBQTBEO0FBRzFELHNEQUFzRDtBQUN0RCx3RUFBd0U7QUFDeEUsMkJBQTJCO0FBQzNCLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsc0VBQXNFO0FBQ3RFLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsMEVBQTBFO0FBQzFFLHdCQUF3QjtBQUN4QixtQ0FBbUM7QUFDbkMseUJBQXlCO0FBRXpCLHdCQUF3QjtBQUN4QixzRkFBc0Y7QUFDdEYsNkNBQTZDO0FBQzdDLDZFQUE2RTtBQUM3RSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiLElBQUk7QUFFSiw2QkFBZSxzQ0FBVztJQUN0QixNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR0gsc0RBQWNBLENBQUNELHNEQUFZQTtJQUMzRCw4QkFBOEI7SUFFOUIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsSUFBSTtJQUVKLHFCQUNJLDhEQUFDSzs7MEJBQ0csOERBQUNOLDBEQUFNQTtnQkFBQ08sT0FBTztvQkFBQ0MsTUFBTTtvQkFBV0MsT0FBTztnQkFBVzs7Ozs7O1lBQ2xETCxZQUFZLE9BQU9ELG9FQUFRQSxDQUFDLGNBQWNBLG9FQUFRQSxDQUFDOzs7Ozs7O0FBR2hFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oZGFzaGJvYXJkKS90cmFuc2FjdGlvbnMvcGFnZS50c3g/NzQ0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAcmVwby9kYi9jbGllbnRcIjtcbmltcG9ydCB7IEFkZE1vbmV5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQWRkTW9uZXlDYXJkXCI7XG5pbXBvcnQgeyBCYWxhbmNlQ2FyZCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0JhbGFuY2VDYXJkXCI7XG5pbXBvcnQgeyBPblJhbXBUcmFuc2FjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9PblJhbXBUcmFuc2FjdGlvbnNcIjtcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9saWIvYXV0aFwiO1xuaW1wb3J0IFRvZ2dsZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Ub2dnbGVcIjtcbmltcG9ydCB7IHRyYW5zYWN0aW9uQXRvbSwgdHJhbnNmZXJBdG9tIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2F0b21zXCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9hcGktdXRpbHNcIjtcblxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0QmFsYW5jZSgpIHtcbi8vICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4vLyAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHByaXNtYS5iYWxhbmNlLmZpbmRGaXJzdCh7XG4vLyAgICAgICAgIHdoZXJlOiB7XG4vLyAgICAgICAgICAgICB1c2VySWQ6IE51bWJlcihzZXNzaW9uPy51c2VyPy5pZClcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIGFtb3VudDogYmFsYW5jZT8uYW1vdW50IHx8IDAsXG4vLyAgICAgICAgIGxvY2tlZDogYmFsYW5jZT8ubG9ja2VkIHx8IDBcbi8vICAgICB9XG4vLyB9XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGdldE9uUmFtcFRyYW5zYWN0aW9ucygpIHtcbi8vICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4vLyAgICAgY29uc3QgdHhucyA9IGF3YWl0IHByaXNtYS5vblJhbXBUcmFuc2FjdGlvbi5maW5kTWFueSh7XG4vLyAgICAgICAgIHdoZXJlOiB7XG4vLyAgICAgICAgICAgICB1c2VySWQ6IE51bWJlcihzZXNzaW9uPy51c2VyPy5pZClcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICAgIHJldHVybiB0eG5zLm1hcCh0ID0+ICh7XG4vLyAgICAgICAgIHRpbWU6IHQuc3RhcnRUaW1lLFxuLy8gICAgICAgICBhbW91bnQ6IHQuYW1vdW50LFxuLy8gICAgICAgICBzdGF0dXM6IHQuc3RhdHVzLFxuLy8gICAgICAgICBwcm92aWRlcjogdC5wcm92aWRlclxuLy8gICAgIH0pKVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbigpIHtcbi8vICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgZ2V0QmFsYW5jZSgpO1xuLy8gICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IGF3YWl0IGdldE9uUmFtcFRyYW5zYWN0aW9ucygpO1xuXG5cbi8vICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1bIzZhNTFhNl0gcHQtOCBtYi04IGZvbnQtYm9sZFwiPlxuLy8gICAgICAgICAgICAgVHJhbnNhY3Rpb25zXG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgPFRvZ2dsZSBpbnB1dD17e2xlZnQ6IFwiRGVwb3NpdFwiLCByaWdodDogXCJXaXRoZHJhd2xcIn19Lz5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTQgbWQ6Z3JpZC1jb2xzLTIgcC00XCI+XG4vLyAgICAgICAgICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgPEFkZE1vbmV5IC8+XG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbi8vICAgICAgICAgICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNhcmQgYW1vdW50PXtiYWxhbmNlLmFtb3VudH0gbG9ja2VkPXtiYWxhbmNlLmxvY2tlZH0gLz5cbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8T25SYW1wVHJhbnNhY3Rpb25zIHRyYW5zYWN0aW9ucz17dHJhbnNhY3Rpb25zfSAvPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgW3RyYW5zZmVyLCBzZXRUcmFuc2Zlcl0gPSB1c2VSZWNvaWxTdGF0ZSh0cmFuc2ZlckF0b20pO1xuICAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgLy8gaWYodHJhbnNmZXIpe1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgPGRpdj5cbiAgICAvLyAgICAgICAgICAgICBEZXBvc2l0XG4gICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgKVxuICAgIC8vIH1lbHNle1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgPGRpdj5cbiAgICAvLyAgICAgICAgICAgICBXaXRoZHJhd2xcbiAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgIC8vICAgICApXG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUb2dnbGUgaW5wdXQ9e3tsZWZ0OiBcIkRlcG9zaXRcIiwgcmlnaHQ6IFwiV2l0aGRyYXdsXCJ9fS8+XG4gICAgICAgICAgICB7dHJhbnNmZXIgPT0gdHJ1ZSA/IHJlZGlyZWN0KCcvZGVwb3NpdCcpIDogcmVkaXJlY3QoJy93aXRoZHJhd2wnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJUb2dnbGUiLCJ0cmFuc2ZlckF0b20iLCJ1c2VSZWNvaWxTdGF0ZSIsInJlZGlyZWN0IiwidHJhbnNmZXIiLCJzZXRUcmFuc2ZlciIsImRpdiIsImlucHV0IiwibGVmdCIsInJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/transactions/page.tsx\n"));

/***/ })

});