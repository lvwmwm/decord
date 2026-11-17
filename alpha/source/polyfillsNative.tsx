// Module ID: 16778
// Function ID: 16779
// Name: polyfillsNative
// Dependencies: [3, 16779, 16849, 16867, 16870, 16873, 1267, 1248, 2]

// Module 16778 (polyfillsNative)
import _mod1248 from "module_1248" /* 1248 */;
import Buffer from "Buffer" /* 1267 */;
import _mod16873 from "module_16873" /* 16873 */;
import Logger from "Logger" /* 3 */;
import module_16779 from "module_16779" /* 16779 */;
import react_native from "react-native" /* 16849 */;
import getPluralRules from "getPluralRules" /* 16867 */;
import module_16870 from "module_16870" /* 16870 */;
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
  const _module5 = _mod16873;
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
