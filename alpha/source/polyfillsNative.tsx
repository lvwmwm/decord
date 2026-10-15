// Module ID: 15202
// Function ID: 15203
// Name: polyfillsNative
// Dependencies: [3, 15203, 15273, 15291, 15294, 15297, 1276, 1261, 2]

// Module 15202 (polyfillsNative)
import _mod1261 from "module_1261" /* 1261 */;
import Buffer from "Buffer" /* 1276 */;
import _mod15297 from "module_15297" /* 15297 */;
import Logger from "Logger" /* 3 */;
import module_15203 from "module_15203" /* 15203 */;
import react_native from "react-native" /* 15273 */;
import getPluralRules from "getPluralRules" /* 15291 */;
import module_15294 from "module_15294" /* 15294 */;
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
  const _module5 = _mod15297;
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
  const _module6 = _mod1261;
}
const result = size.fileFinishedImporting("polyfillsNative.tsx");
