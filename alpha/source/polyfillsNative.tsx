// Module ID: 14470
// Function ID: 14471
// Name: polyfillsNative
// Dependencies: [3, 14471, 14541, 14559, 14562, 14565, 1276, 1261, 2]

// Module 14470 (polyfillsNative)
import _mod1261 from "module_1261" /* 1261 */;
import Buffer from "Buffer" /* 1276 */;
import _mod14565 from "module_14565" /* 14565 */;
import Logger from "Logger" /* 3 */;
import module_14471 from "module_14471" /* 14471 */;
import react_native from "react-native" /* 14541 */;
import getPluralRules from "getPluralRules" /* 14559 */;
import module_14562 from "module_14562" /* 14562 */;
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
  const _module5 = _mod14565;
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
  const _module6 = _mod1261;
}
const result = size.fileFinishedImporting("polyfillsNative.tsx");
