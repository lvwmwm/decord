// Module ID: 15237
// Function ID: 15238
// Name: polyfillsNative
// Dependencies: [3, 15238, 15308, 15326, 15329, 15332, 1278, 1263, 2]

// Module 15237 (polyfillsNative)
import _mod1263 from "module_1263" /* 1263 */;
import Buffer from "Buffer" /* 1278 */;
import _mod15332 from "module_15332" /* 15332 */;
import Logger from "Logger" /* 3 */;
import module_15238 from "module_15238" /* 15238 */;
import react_native from "react-native" /* 15308 */;
import getPluralRules from "getPluralRules" /* 15326 */;
import module_15329 from "module_15329" /* 15329 */;
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
  const _module5 = _mod15332;
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
