// Module ID: 1609
// Function ID: 1610
// Name: isJest
// Dependencies: [19, 17]
// Exports: isAndroid, isChromeDebugger, isFabric, isIOS, isJest, isMacOS, isReact19, isWeb, isWindowAvailable, shouldBeUseWeb

// Module 1609 (isJest)
import { version } from "noop";
import { Platform } from "get ActivityIndicator";


export const isJest = function isJest() {
  return process.env.JEST_WORKER_ID;
};
export const isChromeDebugger = function isChromeDebugger() {
  return !(global.nativeCallSyncHook && !global.__REMOTEDEV__ || global.RN$Bridgeless);
};
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
  let flag = process.env.JEST_WORKER_ID;
  if (!flag) {
    flag = !(global.nativeCallSyncHook && !global.__REMOTEDEV__ || global.RN$Bridgeless);
    const tmp2 = global.nativeCallSyncHook && !global.__REMOTEDEV__ || global.RN$Bridgeless;
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
  return typeof window === "ta";
};
