// Module ID: 174
// Function ID: 2567
// Dependencies: [126, 175, 176, 177, 178, 181]

// Module 174
if (true === global.RN$Bridgeless) {
  global.RN$enableMicrotasksInReact = true;
  const _module = require("polyfillObjectProperty");
  _module.polyfillGlobal("queueMicrotask", () => require(175) /* NativeMicrotasksCxx */.default.queueMicrotask);
  const _module1 = require("polyfillObjectProperty");
  _module1.polyfillGlobal("setImmediate", () => require(176) /* set */.setImmediate);
  const _module2 = require("polyfillObjectProperty");
  _module2.polyfillGlobal("clearImmediate", () => require(176) /* set */.clearImmediate);
  const _module3 = require("polyfillObjectProperty");
  _module3.polyfillGlobal("requestIdleCallback", () => require(177) /* NativeIdleCallbacksCxx */.default.requestIdleCallback);
  const _module4 = require("polyfillObjectProperty");
  _module4.polyfillGlobal("cancelIdleCallback", () => require(177) /* NativeIdleCallbacksCxx */.default.cancelIdleCallback);
} else {
  function defineLazyTimer(cancelAnimationFrame) {
    const _require = cancelAnimationFrame;
    _require(126).polyfillGlobal(cancelAnimationFrame, () => _cancelAnimationFrame(outer1_1[4]).default[_cancelAnimationFrame]);
  }
  defineLazyTimer("setTimeout");
  defineLazyTimer("clearTimeout");
  defineLazyTimer("setInterval");
  defineLazyTimer("clearInterval");
  defineLazyTimer("requestAnimationFrame");
  defineLazyTimer("cancelAnimationFrame");
  defineLazyTimer("requestIdleCallback");
  defineLazyTimer("cancelIdleCallback");
  const _module5 = require("polyfillObjectProperty");
  _module5.polyfillGlobal("queueMicrotask", () => require(181) /* queueMicrotask */.default);
  const _module6 = require("polyfillObjectProperty");
  _module6.polyfillGlobal("setImmediate", () => require(178) /* _allocateCallback */.default.queueReactNativeMicrotask);
  const _module7 = require("polyfillObjectProperty");
  _module7.polyfillGlobal("clearImmediate", () => require(178) /* _allocateCallback */.default.clearReactNativeMicrotask);
}
