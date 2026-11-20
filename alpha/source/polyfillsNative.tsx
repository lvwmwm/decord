// Module ID: 15411
// Function ID: 15412
// Name: polyfillsNative
// Dependencies: [3, 15412, 15482, 15500, 15503, 15506, 1266, 1247, 2]

// Module 15411 (polyfillsNative)
import _mod1247 from "module_1247" /* 1247 */;
import Buffer from "Buffer" /* 1266 */;
import _mod15506 from "module_15506" /* 15506 */;
import Logger from "Logger" /* 3 */;
import module_15412 from "module_15412" /* 15412 */;
import react_native from "react-native" /* 15482 */;
import getPluralRules from "getPluralRules" /* 15500 */;
import module_15503 from "module_15503" /* 15503 */;
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
  const _module5 = _mod15506;
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
  const _module6 = _mod1247;
}
const result = size.fileFinishedImporting("polyfillsNative.tsx");
