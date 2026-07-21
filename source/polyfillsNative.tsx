// Module ID: 13103
// Function ID: 99435
// Dependencies: []

// Module 13103
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
  global.location = { <string:80568576>: "222_social", <string:80501760>: null };
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
