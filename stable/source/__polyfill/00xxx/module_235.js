// Module ID: 235
// Function ID: 236
// Dependencies: [236, 46, 183, 237, 92, 238, 239, 240]

// Module 235
import _modDef236 from "module_236" /* 236 */;

const require = globalThis.__r;

_modDef236("Systrace", () => require("module_46"));
if (true !== global.RN$Bridgeless) {
  _modDef236("JSTimers", () => require("module_183").default);
}
_modDef236("RCTLog", () => require("module_237").default);
_modDef236("RCTDeviceEventEmitter", () => require("module_92").default);
_modDef236("RCTNativeAppEventEmitter", () => require("module_238").default);
_modDef236("GlobalPerformanceLogger", () => require("module_239").default);
_modDef236("HMRClient", () => require("module_240").default);
