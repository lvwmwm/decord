// Module ID: 15735
// Function ID: 15736
// Name: polyfillsNative
// Dependencies: [3, 15736, 15806, 15824, 15827, 15830, 1267, 1248, 2]

// Module 15735 (polyfillsNative)
import _mod1248 from "module_1248" /* 1248 */;
import Buffer from "Buffer" /* 1267 */;
import _mod15830 from "module_15830" /* 15830 */;
import Logger from "Logger" /* 3 */;
import module_15736 from "module_15736" /* 15736 */;
import react_native from "react-native" /* 15806 */;
import getPluralRules from "getPluralRules" /* 15824 */;
import module_15827 from "module_15827" /* 15827 */;
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
  const _module5 = _mod15830;
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
