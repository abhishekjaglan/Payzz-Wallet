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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _store_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/atoms */ \"(app-pages-browser)/./store/atoms.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/../../node_modules/recoil/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n// async function getBalance() {\n//     const session = await getServerSession(authOptions);\n//     const balance = await prisma.balance.findFirst({\n//         where: {\n//             userId: Number(session?.user?.id)\n//         }\n//     });\n//     return {\n//         amount: balance?.amount || 0,\n//         locked: balance?.locked || 0\n//     }\n// }\n// async function getOnRampTransactions() {\n//     const session = await getServerSession(authOptions);\n//     const txns = await prisma.onRampTransaction.findMany({\n//         where: {\n//             userId: Number(session?.user?.id)\n//         }\n//     });\n//     return txns.map(t => ({\n//         time: t.startTime,\n//         amount: t.amount,\n//         status: t.status,\n//         provider: t.provider\n//     }))\n// }\n// export default async function() {\n//     const balance = await getBalance();\n//     const transactions = await getOnRampTransactions();\n//     return <div className=\"w-screen flex flex-col\">\n//         <div className=\"text-4xl text-[#6a51a6] pt-8 mb-8 font-bold\">\n//             Transactions\n//         </div>\n//         <div>\n//             <Toggle input={{left: \"Deposit\", right: \"Withdrawl\"}}/>\n//         </div>\n//         <div>\n//             <div className=\"grid grid-cols-1 gap-4 md:grid-cols-2 p-4\">\n//                 <div>\n//                     <AddMoney />\n//                 </div>\n//                 <div>\n//                     <BalanceCard amount={balance.amount} locked={balance.locked} />\n//                     <div className=\"pt-4\">\n//                         <OnRampTransactions transactions={transactions} />\n//                     </div>\n//                 </div>\n//             </div>\n//         </div>\n//     </div>\n// }\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    const [transfer, setTransfer] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_store_atoms__WEBPACK_IMPORTED_MODULE_1__.transferAtom);\n    // if(transfer){\n    //     return (\n    //         <div>\n    //             Deposit\n    //         </div>\n    //     )\n    // }else{\n    //     return (\n    //         <div>\n    //             Withdrawl\n    //         </div>\n    //     )\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/abhishekjaglan/Desktop/Projects/100xDevs/payzz/week-17-final-code/apps/user-app/app/(dashboard)/transactions/page.tsx\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS90cmFuc2FjdGlvbnMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFTcUU7QUFDN0I7QUFHeEMsZ0NBQWdDO0FBQ2hDLDJEQUEyRDtBQUMzRCx1REFBdUQ7QUFDdkQsbUJBQW1CO0FBQ25CLGdEQUFnRDtBQUNoRCxZQUFZO0FBQ1osVUFBVTtBQUNWLGVBQWU7QUFDZix3Q0FBd0M7QUFDeEMsdUNBQXVDO0FBQ3ZDLFFBQVE7QUFDUixJQUFJO0FBRUosMkNBQTJDO0FBQzNDLDJEQUEyRDtBQUMzRCw2REFBNkQ7QUFDN0QsbUJBQW1CO0FBQ25CLGdEQUFnRDtBQUNoRCxZQUFZO0FBQ1osVUFBVTtBQUNWLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QiwrQkFBK0I7QUFDL0IsVUFBVTtBQUNWLElBQUk7QUFFSixvQ0FBb0M7QUFDcEMsMENBQTBDO0FBQzFDLDBEQUEwRDtBQUcxRCxzREFBc0Q7QUFDdEQsd0VBQXdFO0FBQ3hFLDJCQUEyQjtBQUMzQixpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLHNFQUFzRTtBQUN0RSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLDBFQUEwRTtBQUMxRSx3QkFBd0I7QUFDeEIsbUNBQW1DO0FBQ25DLHlCQUF5QjtBQUV6Qix3QkFBd0I7QUFDeEIsc0ZBQXNGO0FBQ3RGLDZDQUE2QztBQUM3Qyw2RUFBNkU7QUFDN0UsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixJQUFJO0FBRUosNkJBQWUsc0NBQVc7SUFDdEIsTUFBTSxDQUFDRSxVQUFVQyxZQUFZLEdBQUdGLHNEQUFjQSxDQUFDRCxzREFBWUE7SUFFM0QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsSUFBSTtJQUVKLHFCQUNJLDhEQUFDSTs7Ozs7QUFLVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGRhc2hib2FyZCkvdHJhbnNhY3Rpb25zL3BhZ2UudHN4Pzc0NDgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQHJlcG8vZGIvY2xpZW50XCI7XG5pbXBvcnQgeyBBZGRNb25leSB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0FkZE1vbmV5Q2FyZFwiO1xuaW1wb3J0IHsgQmFsYW5jZUNhcmQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9CYWxhbmNlQ2FyZFwiO1xuaW1wb3J0IHsgT25SYW1wVHJhbnNhY3Rpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvT25SYW1wVHJhbnNhY3Rpb25zXCI7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vbGliL2F1dGhcIjtcbmltcG9ydCBUb2dnbGUgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvVG9nZ2xlXCI7XG5pbXBvcnQgeyB0cmFuc2FjdGlvbkF0b20sIHRyYW5zZmVyQXRvbSB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9hdG9tc1wiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0QmFsYW5jZSgpIHtcbi8vICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4vLyAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHByaXNtYS5iYWxhbmNlLmZpbmRGaXJzdCh7XG4vLyAgICAgICAgIHdoZXJlOiB7XG4vLyAgICAgICAgICAgICB1c2VySWQ6IE51bWJlcihzZXNzaW9uPy51c2VyPy5pZClcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIGFtb3VudDogYmFsYW5jZT8uYW1vdW50IHx8IDAsXG4vLyAgICAgICAgIGxvY2tlZDogYmFsYW5jZT8ubG9ja2VkIHx8IDBcbi8vICAgICB9XG4vLyB9XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGdldE9uUmFtcFRyYW5zYWN0aW9ucygpIHtcbi8vICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4vLyAgICAgY29uc3QgdHhucyA9IGF3YWl0IHByaXNtYS5vblJhbXBUcmFuc2FjdGlvbi5maW5kTWFueSh7XG4vLyAgICAgICAgIHdoZXJlOiB7XG4vLyAgICAgICAgICAgICB1c2VySWQ6IE51bWJlcihzZXNzaW9uPy51c2VyPy5pZClcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICAgIHJldHVybiB0eG5zLm1hcCh0ID0+ICh7XG4vLyAgICAgICAgIHRpbWU6IHQuc3RhcnRUaW1lLFxuLy8gICAgICAgICBhbW91bnQ6IHQuYW1vdW50LFxuLy8gICAgICAgICBzdGF0dXM6IHQuc3RhdHVzLFxuLy8gICAgICAgICBwcm92aWRlcjogdC5wcm92aWRlclxuLy8gICAgIH0pKVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbigpIHtcbi8vICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgZ2V0QmFsYW5jZSgpO1xuLy8gICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IGF3YWl0IGdldE9uUmFtcFRyYW5zYWN0aW9ucygpO1xuXG5cbi8vICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1bIzZhNTFhNl0gcHQtOCBtYi04IGZvbnQtYm9sZFwiPlxuLy8gICAgICAgICAgICAgVHJhbnNhY3Rpb25zXG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgPFRvZ2dsZSBpbnB1dD17e2xlZnQ6IFwiRGVwb3NpdFwiLCByaWdodDogXCJXaXRoZHJhd2xcIn19Lz5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTQgbWQ6Z3JpZC1jb2xzLTIgcC00XCI+XG4vLyAgICAgICAgICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgPEFkZE1vbmV5IC8+XG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbi8vICAgICAgICAgICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNhcmQgYW1vdW50PXtiYWxhbmNlLmFtb3VudH0gbG9ja2VkPXtiYWxhbmNlLmxvY2tlZH0gLz5cbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8T25SYW1wVHJhbnNhY3Rpb25zIHRyYW5zYWN0aW9ucz17dHJhbnNhY3Rpb25zfSAvPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgW3RyYW5zZmVyLCBzZXRUcmFuc2Zlcl0gPSB1c2VSZWNvaWxTdGF0ZSh0cmFuc2ZlckF0b20pO1xuXG4gICAgLy8gaWYodHJhbnNmZXIpe1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgPGRpdj5cbiAgICAvLyAgICAgICAgICAgICBEZXBvc2l0XG4gICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgKVxuICAgIC8vIH1lbHNle1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgPGRpdj5cbiAgICAvLyAgICAgICAgICAgICBXaXRoZHJhd2xcbiAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgIC8vICAgICApXG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsvKiA8VG9nZ2xlIGlucHV0PXt7bGVmdDogXCJEZXBvc2l0XCIsIHJpZ2h0OiBcIldpdGhkcmF3bFwifX0vPiAqL31cbiAgICAgICAgICAgIHsvKiB7dHJhbnNmZXIgPT0gdHJ1ZSA/IDxkaXY+RGVwb3NpdDwvZGl2PiA6IDxkaXY+V2l0aGRyYXdsPC9kaXY+fSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ0cmFuc2ZlckF0b20iLCJ1c2VSZWNvaWxTdGF0ZSIsInRyYW5zZmVyIiwic2V0VHJhbnNmZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/transactions/page.tsx\n"));

/***/ })

});