// Module ID: 174
// Function ID: 2567
// Dependencies: []

// Module 174
if (true === global.RN$Bridgeless) {
  global.RN$enableMicrotasksInReact = true;
  const _module = require(dependencyMap[0]);
  _module.polyfillGlobal("queueMicrotask", () => require(dependencyMap[1]).default.queueMicrotask);
  const _module1 = require(dependencyMap[0]);
  _module1.polyfillGlobal("setImmediate", () => require(dependencyMap[2]).setImmediate);
  const _module2 = require(dependencyMap[0]);
  _module2.polyfillGlobal("clearImmediate", () => require(dependencyMap[2]).clearImmediate);
  const _module3 = require(dependencyMap[0]);
  _module3.polyfillGlobal("requestIdleCallback", () => require(dependencyMap[3]).default.requestIdleCallback);
  const _module4 = require(dependencyMap[0]);
  _module4.polyfillGlobal("cancelIdleCallback", () => require(dependencyMap[3]).default.cancelIdleCallback);
} else {
  function defineLazyTimer(cancelAnimationFrame) {
    const require = cancelAnimationFrame;
    require(dependencyMap[0]).polyfillGlobal(cancelAnimationFrame, () => arg0(closure_1[4]).default[closure_0]);
  }
  defineLazyTimer("setTimeout");
  defineLazyTimer("clearTimeout");
  defineLazyTimer("setInterval");
  defineLazyTimer("clearInterval");
  defineLazyTimer("requestAnimationFrame");
  defineLazyTimer("cancelAnimationFrame");
  defineLazyTimer("requestIdleCallback");
  defineLazyTimer("cancelIdleCallback");
  const _module5 = require(dependencyMap[0]);
  _module5.polyfillGlobal("queueMicrotask", () => require(dependencyMap[5]).default);
  const _module6 = require(dependencyMap[0]);
  _module6.polyfillGlobal("setImmediate", () => require(dependencyMap[4]).default.queueReactNativeMicrotask);
  const _module7 = require(dependencyMap[0]);
  _module7.polyfillGlobal("clearImmediate", () => require(dependencyMap[4]).default.clearReactNativeMicrotask);
}
