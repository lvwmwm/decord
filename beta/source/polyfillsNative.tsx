// Module ID: 16745
// Function ID: 16746
// Name: polyfillsNative
// Dependencies: [3, 16746, 16816, 16834, 16837, 16840, 1267, 1248, 2]

// Module 16745 (polyfillsNative)
import _mod1248 from "module_1248" /* 1248 */;
import Buffer from "Buffer" /* 1267 */;
import _mod16840 from "module_16840" /* 16840 */;
import Logger from "Logger" /* 3 */;
import module_16746 from "module_16746" /* 16746 */;
import react_native from "react-native" /* 16816 */;
import getPluralRules from "getPluralRules" /* 16834 */;
import module_16837 from "module_16837" /* 16837 */;
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
  const _module5 = _mod16840;
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
