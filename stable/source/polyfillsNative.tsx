// Module ID: 14604
// Function ID: 14605
// Name: polyfillsNative
// Dependencies: [3, 14605, 14675, 14693, 14696, 14699, 1252, 1237, 2]

// Module 14604 (polyfillsNative)
import q from "q" /* 1237 */;
import Buffer from "Buffer" /* 1252 */;
import _mod14699 from "module_14699" /* 14699 */;
import Logger from "Logger" /* 3 */;
import module_14605 from "module_14605" /* 14605 */;
import get_ActivityIndicator from "module_14675" /* 14675 */;
import _typeof from "module_14693" /* 14693 */;
import GetOption from "module_14696" /* 14696 */;
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
  const _module5 = _mod14699;
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
