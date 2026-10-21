// Module ID: 15438
// Function ID: 15439
// Name: polyfillsNative
// Dependencies: [3, 15439, 15509, 15527, 15530, 15533, 1278, 1263, 2]

// Module 15438 (polyfillsNative)
import _mod1263 from "module_1263" /* 1263 */;
import Buffer from "Buffer" /* 1278 */;
import _mod15533 from "module_15533" /* 15533 */;
import Logger from "Logger" /* 3 */;
import module_15439 from "module_15439" /* 15439 */;
import react_native from "react-native" /* 15509 */;
import getPluralRules from "getPluralRules" /* 15527 */;
import module_15530 from "module_15530" /* 15530 */;
import size from "module_2" /* 2 */;

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
  const _module5 = _mod15533;
  const _window = window;
  window.crypto = global.crypto;
}
if (null == global.Buffer) {
  global.Buffer = Buffer.Buffer;
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
  const _module6 = _mod1263;
}
const result = size.fileFinishedImporting("polyfillsNative.tsx");
