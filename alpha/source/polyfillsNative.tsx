// Module ID: 16079
// Function ID: 16080
// Name: polyfillsNative
// Dependencies: [3, 16080, 16150, 16168, 16171, 16174, 1264, 1249, 2]

// Module 16079 (polyfillsNative)
import _mod1249 from "module_1249" /* 1249 */;
import Buffer from "Buffer" /* 1264 */;
import _mod16174 from "module_16174" /* 16174 */;
import Logger from "Logger" /* 3 */;
import module_16080 from "module_16080" /* 16080 */;
import react_native from "react-native" /* 16150 */;
import getPluralRules from "getPluralRules" /* 16168 */;
import module_16171 from "module_16171" /* 16171 */;
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
  const _module5 = _mod16174;
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
