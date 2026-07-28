// Module ID: 13335
// Function ID: 102278
// Dependencies: [3, 13336, 13406, 13424, 13427, 13430, 488, 1190, 2]

// Module 13335
import timestamp from "_mergeNamespaces";
import module_13336 from "module_13336";
import get_ActivityIndicator from "get ActivityIndicator";
import _mergeNamespaces from "_mergeNamespaces";
import CanonicalizeLocaleList from "CanonicalizeLocaleList";

if ("undefined" === typeof process) {
  const _window = window;
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
  const _module5 = require("_callSuper");
  const _window2 = window;
  window.crypto = global.crypto;
}
if (null == global.Buffer) {
  global.Buffer = require("createBuffer").Buffer;
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
  const _module6 = require("k");
}
const result = require("get ActivityIndicator").fileFinishedImporting("polyfillsNative.tsx");
