// Module ID: 13096
// Function ID: 99412
// Dependencies: []

// Module 13096
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
const _module2 = require(dependencyMap[2]);
const _module3 = require(dependencyMap[3]);
const _module4 = require(dependencyMap[4]);
if ("undefined" === typeof process) {
  const _window = window;
  window.process = {};
}
window.process.nextTick = setImmediate;
if (null == global.location) {
  global.location = { 0: "photo", 0: false };
}
if (!global.self) {
  global.self = global;
}
if (null == window.crypto) {
  const _module5 = require(dependencyMap[5]);
  const _window2 = window;
  window.crypto = global.crypto;
}
if (null == global.Buffer) {
  global.Buffer = require(dependencyMap[6]).Buffer;
}
if (null == global.__reanimatedWorkletInit) {
  global.__reanimatedWorkletInit = () => {

  };
}
const fn = function() {
  return Array.from(this);
};
Map.prototype.toJSON = fn;
Set.prototype.toJSON = fn;
let tmp7 = null != window.TextEncoder;
if (tmp7) {
  const _window3 = window;
  tmp7 = null != window.TextDecoder;
}
if (!tmp7) {
  const _module6 = require(dependencyMap[7]);
}
const _module7 = require(dependencyMap[8]);
const result = _module7.fileFinishedImporting("polyfillsNative.tsx");
