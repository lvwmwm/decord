// Module ID: 14614
// Function ID: 14615
// Name: polyfillsNative
// Dependencies: [3, 14615, 14685, 14703, 14706, 14709, 1256, 1241, 2]

// Module 14614 (polyfillsNative)
import q from "q" /* 1241 */;
import Buffer from "Buffer" /* 1256 */;
import _mod14709 from "module_14709" /* 14709 */;
import Logger from "Logger" /* 3 */;
import module_14615 from "module_14615" /* 14615 */;
import get_ActivityIndicator from "module_14685" /* 14685 */;
import _typeof from "module_14703" /* 14703 */;
import GetOption from "module_14706" /* 14706 */;
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
  const _module5 = _mod14709;
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
  const _module6 = q;
}
const result = size.fileFinishedImporting("polyfillsNative.tsx");
