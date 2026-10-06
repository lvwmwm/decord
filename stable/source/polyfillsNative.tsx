// Module ID: 13786
// Function ID: 13787
// Name: polyfillsNative
// Dependencies: [3, 13787, 13857, 13875, 13878, 13881, 1264, 1249, 2]

// Module 13786 (polyfillsNative)
import _mod1249 from "module_1249" /* 1249 */;
import Buffer from "Buffer" /* 1264 */;
import _mod13881 from "module_13881" /* 13881 */;
import Logger from "Logger" /* 3 */;
import module_13787 from "module_13787" /* 13787 */;
import react_native from "react-native" /* 13857 */;
import getPluralRules from "getPluralRules" /* 13875 */;
import module_13878 from "module_13878" /* 13878 */;
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
  const _module5 = _mod13881;
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
  const _module6 = _mod1249;
}
const result = size.fileFinishedImporting("polyfillsNative.tsx");
