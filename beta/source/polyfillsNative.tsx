// Module ID: 15546
// Function ID: 15547
// Name: polyfillsNative
// Dependencies: [3, 15547, 15617, 15635, 15638, 15641, 1266, 1247, 2]

// Module 15546 (polyfillsNative)
import _mod1247 from "module_1247" /* 1247 */;
import Buffer from "Buffer" /* 1266 */;
import _mod15641 from "module_15641" /* 15641 */;
import Logger from "Logger" /* 3 */;
import module_15547 from "module_15547" /* 15547 */;
import react_native from "react-native" /* 15617 */;
import getPluralRules from "getPluralRules" /* 15635 */;
import module_15638 from "module_15638" /* 15638 */;
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
  const _module5 = _mod15641;
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
