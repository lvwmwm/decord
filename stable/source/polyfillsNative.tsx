// Module ID: 14552
// Function ID: 14553
// Name: polyfillsNative
// Dependencies: [3, 14553, 14623, 14641, 14644, 14647, 1276, 1261, 2]

// Module 14552 (polyfillsNative)
import _mod1261 from "module_1261" /* 1261 */;
import Buffer from "Buffer" /* 1276 */;
import _mod14647 from "module_14647" /* 14647 */;
import Logger from "Logger" /* 3 */;
import module_14553 from "module_14553" /* 14553 */;
import react_native from "react-native" /* 14623 */;
import getPluralRules from "getPluralRules" /* 14641 */;
import module_14644 from "module_14644" /* 14644 */;
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
  const _module5 = _mod14647;
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
