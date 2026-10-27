// Module ID: 15577
// Function ID: 15578
// Name: polyfillsNative
// Dependencies: [3, 15578, 15648, 15666, 15669, 15672, 1275, 1260, 2]

// Module 15577 (polyfillsNative)
import _mod1260 from "module_1260" /* 1260 */;
import Buffer from "Buffer" /* 1275 */;
import _mod15672 from "module_15672" /* 15672 */;
import Logger from "Logger" /* 3 */;
import module_15578 from "module_15578" /* 15578 */;
import react_native from "react-native" /* 15648 */;
import getPluralRules from "getPluralRules" /* 15666 */;
import module_15669 from "module_15669" /* 15669 */;
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
  const _module5 = _mod15672;
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
  const _module6 = _mod1260;
}
const result = size.fileFinishedImporting("polyfillsNative.tsx");
