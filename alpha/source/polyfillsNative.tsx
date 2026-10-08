// Module ID: 14374
// Function ID: 14375
// Name: polyfillsNative
// Dependencies: [3, 14375, 14445, 14463, 14466, 14469, 1275, 1260, 2]

// Module 14374 (polyfillsNative)
import _mod1260 from "module_1260" /* 1260 */;
import Buffer from "Buffer" /* 1275 */;
import _mod14469 from "module_14469" /* 14469 */;
import Logger from "Logger" /* 3 */;
import module_14375 from "module_14375" /* 14375 */;
import react_native from "react-native" /* 14445 */;
import getPluralRules from "getPluralRules" /* 14463 */;
import module_14466 from "module_14466" /* 14466 */;
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
  const _module5 = _mod14469;
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
  const _module6 = _mod1260;
}
const result = size.fileFinishedImporting("polyfillsNative.tsx");
