// Module ID: 16369
// Function ID: 16370
// Name: polyfillsNative
// Dependencies: [3, 16370, 16440, 16458, 16461, 16464, 1263, 1248, 2]

// Module 16369 (polyfillsNative)
import _mod1248 from "module_1248" /* 1248 */;
import Buffer from "Buffer" /* 1263 */;
import _mod16464 from "module_16464" /* 16464 */;
import Logger from "Logger" /* 3 */;
import module_16370 from "module_16370" /* 16370 */;
import react_native from "react-native" /* 16440 */;
import getPluralRules from "getPluralRules" /* 16458 */;
import module_16461 from "module_16461" /* 16461 */;
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
  const _module5 = _mod16464;
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
