// Module ID: 15803
// Function ID: 15804
// Name: polyfillsNative
// Dependencies: [3, 15804, 15874, 15892, 15895, 15898, 1275, 1260, 2]

// Module 15803 (polyfillsNative)
import _mod1260 from "module_1260" /* 1260 */;
import Buffer from "Buffer" /* 1275 */;
import _mod15898 from "module_15898" /* 15898 */;
import Logger from "Logger" /* 3 */;
import module_15804 from "module_15804" /* 15804 */;
import react_native from "react-native" /* 15874 */;
import getPluralRules from "getPluralRules" /* 15892 */;
import module_15895 from "module_15895" /* 15895 */;
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
  const _module5 = _mod15898;
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
