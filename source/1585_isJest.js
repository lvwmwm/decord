// Module ID: 1585
// Function ID: 17702
// Name: isJest
// Dependencies: [31, 27]
// Exports: isAndroid, isFabric, isIOS, isMacOS, isReact19, isWeb, isWindowAvailable, shouldBeUseWeb

// Module 1585 (isJest)
import { version } from "result";
import { Platform } from "get ActivityIndicator";

function isJest() {
  return process.env.JEST_WORKER_ID;
}
function isChromeDebugger() {
  let RN$Bridgeless = global.nativeCallSyncHook;
  if (RN$Bridgeless) {
    RN$Bridgeless = !global.__REMOTEDEV__;
  }
  if (!RN$Bridgeless) {
    RN$Bridgeless = global.RN$Bridgeless;
  }
  return !RN$Bridgeless;
}

export { isJest };
export { isChromeDebugger };
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
export const shouldBeUseWeb = function shouldBeUseWeb() {
  let flag = isJest();
  if (!flag) {
    flag = isChromeDebugger();
  }
  if (!flag) {
    flag = false;
  }
  return flag;
};
export const isFabric = function isFabric() {
  return global._IS_FABRIC;
};
export const isReact19 = function isReact19() {
  return version.startsWith("19.");
};
export const isWindowAvailable = function isWindowAvailable() {
  return "undefined" !== typeof window;
};
