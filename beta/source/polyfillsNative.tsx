// Module ID: 14576
// Function ID: 14577
// Name: polyfillsNative
// Dependencies: [3, 14577, 14647, 14665, 14668, 14671, 1256, 1241, 2]

// Module 14576 (polyfillsNative)
import q from "q" /* 1241 */;
import Buffer from "Buffer" /* 1256 */;
import _mod14671 from "module_14671" /* 14671 */;
import Logger from "Logger" /* 3 */;
import module_14577 from "module_14577" /* 14577 */;
import get_ActivityIndicator from "module_14647" /* 14647 */;
import _typeof from "module_14665" /* 14665 */;
import GetOption from "module_14668" /* 14668 */;
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
  const _module5 = _mod14671;
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
