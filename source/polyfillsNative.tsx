// Module ID: 13625
// Function ID: 13626
// Dependencies: [3, 13626, 13696, 13714, 13717, 13720, 511, 1214, 2]

// Module 13625
import timestamp from "_typeof";
import module_13626 from "module_13626";
import get_ActivityIndicator from "get ActivityIndicator";
import _typeof from "_typeof";
import GetOption from "GetOption";

if (typeof process === "undefined") {
  const _window3 = window;
  window.process = {};
}
window.process.nextTick = setImmediate;
if (null == global.location) {
  global.location = { protocol: "https:", host: "discord.com" };
}
if (!global.self) {
  global.self = global;
}
if (null == window.crypto) {
  const _module5 = require("_isNativeReflectConstruct");
  const _window = window;
  window.crypto = global.crypto;
}
if (null == global.Buffer) {
  global.Buffer = require("Buffer").Buffer;
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
  const _window2 = window;
  tmp7 = null != window.TextDecoder;
}
if (!tmp7) {
  const _module6 = require("q");
}
const result = require("get ActivityIndicator").fileFinishedImporting("polyfillsNative.tsx");
