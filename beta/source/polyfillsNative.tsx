// Module ID: 16466
// Function ID: 16467
// Name: polyfillsNative
// Dependencies: [3, 16467, 16537, 16555, 16558, 16561, 1263, 1248, 2]

// Module 16466 (polyfillsNative)
import _mod1248 from "module_1248" /* 1248 */;
import Buffer from "Buffer" /* 1263 */;
import _mod16561 from "module_16561" /* 16561 */;
import Logger from "Logger" /* 3 */;
import module_16467 from "module_16467" /* 16467 */;
import react_native from "react-native" /* 16537 */;
import getPluralRules from "getPluralRules" /* 16555 */;
import module_16558 from "module_16558" /* 16558 */;
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
  const _module5 = _mod16561;
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
