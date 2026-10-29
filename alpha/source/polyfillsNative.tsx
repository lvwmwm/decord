// Module ID: 16039
// Function ID: 16040
// Name: polyfillsNative
// Dependencies: [3, 16040, 16110, 16128, 16131, 16134, 1275, 1260, 2]

// Module 16039 (polyfillsNative)
import _mod1260 from "module_1260" /* 1260 */;
import Buffer from "Buffer" /* 1275 */;
import _mod16134 from "module_16134" /* 16134 */;
import Logger from "Logger" /* 3 */;
import module_16040 from "module_16040" /* 16040 */;
import react_native from "react-native" /* 16110 */;
import getPluralRules from "getPluralRules" /* 16128 */;
import module_16131 from "module_16131" /* 16131 */;
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
  const _module5 = _mod16134;
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
