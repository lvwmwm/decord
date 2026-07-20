// Module ID: 192
// Function ID: 2711
// Dependencies: []

// Module 192
const _module = require(dependencyMap[0]);
_module.polyfillGlobal("XMLHttpRequest", () => require(dependencyMap[1]).default);
const _module1 = require(dependencyMap[0]);
_module1.polyfillGlobal("FormData", () => require(dependencyMap[2]).default);
const _module2 = require(dependencyMap[0]);
_module2.polyfillGlobal("fetch", () => require(dependencyMap[3]).fetch);
const _module3 = require(dependencyMap[0]);
_module3.polyfillGlobal("Headers", () => require(dependencyMap[3]).Headers);
const _module4 = require(dependencyMap[0]);
_module4.polyfillGlobal("Request", () => require(dependencyMap[3]).Request);
const _module5 = require(dependencyMap[0]);
_module5.polyfillGlobal("Response", () => require(dependencyMap[3]).Response);
const _module6 = require(dependencyMap[0]);
_module6.polyfillGlobal("WebSocket", () => require(dependencyMap[4]).default);
const _module7 = require(dependencyMap[0]);
_module7.polyfillGlobal("Blob", () => require(dependencyMap[5]).default);
const _module8 = require(dependencyMap[0]);
_module8.polyfillGlobal("File", () => require(dependencyMap[6]).default);
const _module9 = require(dependencyMap[0]);
_module9.polyfillGlobal("FileReader", () => require(dependencyMap[7]).default);
const _module10 = require(dependencyMap[0]);
_module10.polyfillGlobal("URL", () => require(dependencyMap[8]).URL);
const _module11 = require(dependencyMap[0]);
_module11.polyfillGlobal("URLSearchParams", () => require(dependencyMap[8]).URLSearchParams);
const _module12 = require(dependencyMap[0]);
_module12.polyfillGlobal("AbortController", () => require(dependencyMap[9]).AbortController);
const _module13 = require(dependencyMap[0]);
_module13.polyfillGlobal("AbortSignal", () => require(dependencyMap[9]).AbortSignal);
