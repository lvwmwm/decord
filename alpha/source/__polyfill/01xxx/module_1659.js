// Module ID: 1659
// Function ID: 1660
// Dependencies: [19, 17]
// Exports: isAndroid, isChromeDebugger, isFabric, isIOS, isJest, isMacOS, isReact19, isWeb, isWindowAvailable, shouldBeUseWeb

// Module 1659
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;

const version = react.version;
const Platform = react_native.Platform;

export function isJest() {
  return process.env.JEST_WORKER_ID;
}
export function isChromeDebugger() {
  return !(global.nativeCallSyncHook && !global.__REMOTEDEV__ || global.RN$Bridgeless);
}
export function isWeb() {
  return false;
}
export function isAndroid() {
  return true;
}
export function isIOS() {
  return false;
}
export function isMacOS() {
  return false;
}
export function shouldBeUseWeb() {
  let flag = process.env.JEST_WORKER_ID;
  if (!flag) {
    flag = !(global.nativeCallSyncHook && !global.__REMOTEDEV__ || global.RN$Bridgeless);
  }
  if (!flag) {
    flag = false;
  }
  return flag;
}
export function isFabric() {
  return global._IS_FABRIC;
}
export function isReact19() {
  return version.startsWith("19.");
}
export function isWindowAvailable() {
  return typeof window !== "undefined";
}
