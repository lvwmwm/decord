// Module ID: 13784
// Function ID: 13785
// Name: polyfillsNative
// Dependencies: [3, 13785, 13855, 13873, 13876, 13879, 1252, 1237, 2]

// Module 13784 (polyfillsNative)
import _mod1237 from "module_1237" /* 1237 */;
import Buffer from "Buffer" /* 1252 */;
import _mod13879 from "module_13879" /* 13879 */;
import Logger from "Logger" /* 3 */;
import module_13785 from "module_13785" /* 13785 */;
import react_native from "react-native" /* 13855 */;
import getPluralRules from "getPluralRules" /* 13873 */;
import module_13876 from "module_13876" /* 13876 */;
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
  const _module5 = _mod13879;
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
  const _module6 = _mod1237;
}
const result = size.fileFinishedImporting("polyfillsNative.tsx");
