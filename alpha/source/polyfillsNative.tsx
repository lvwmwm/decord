// Module ID: 14055
// Function ID: 14056
// Name: polyfillsNative
// Dependencies: [3, 14056, 14126, 14144, 14147, 14150, 1263, 1248, 2]

// Module 14055 (polyfillsNative)
import _mod1248 from "module_1248" /* 1248 */;
import Buffer from "Buffer" /* 1263 */;
import _mod14150 from "module_14150" /* 14150 */;
import Logger from "Logger" /* 3 */;
import module_14056 from "module_14056" /* 14056 */;
import react_native from "react-native" /* 14126 */;
import getPluralRules from "getPluralRules" /* 14144 */;
import module_14147 from "module_14147" /* 14147 */;
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
  const _module5 = _mod14150;
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
  const _module6 = _mod1248;
}
const result = size.fileFinishedImporting("polyfillsNative.tsx");
