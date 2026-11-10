// Module ID: 1362
// Function ID: 1363
// Name: ExperimentCacher
// Dependencies: [17, 1363, 2, 1364]
// Exports: consumeLogs, crash, generateLaunchSignature, getFluxApi, getHttpClientAPI, registerDevLogListener, rustMultiply

// Module 1362 (ExperimentCacher)
import react_native from "react-native" /* 17 */;
import global_types from "global_types" /* 1363 */;
import clock from "clock" /* 1364 */;
import size from "module_2" /* 2 */;

let LibDiscoreModule;
const NativeModules = react_native.NativeModules;
if (NativeModules.LibDiscoreModule) {
  LibDiscoreModule = NativeModules.LibDiscoreModule;
} else {
  const _Proxy = Proxy;
  const self = this;
  const self2 = this;
  const obj = {
    get() {
        const error = new Error("The package 'react-native-libdiscore-jsi-module' doesn't seem to be linked");
        throw error;
      }
  };
  LibDiscoreModule = new Proxy({}, obj);
}
LibDiscoreModule.bridgeJSIFunctions();
const LIBDISCORE_JSI = global_types.typedGlobal.LIBDISCORE_JSI;
const ExperimentCacher = LIBDISCORE_JSI.ExperimentCacher;
let result = size.fileFinishedImporting("../discord_common/js/packages/libdiscore/mobile/js/index.tsx");
class BlockedDomainsStore {
  static isBlockedDomain(arg0) {
    return LIBDISCORE_JSI.isBlockedDomain(arg0);
  }
  static startFetchingBlockedDomains(arg0) {
    const result = LIBDISCORE_JSI.startFetchingBlockedDomains(arg0);
  }
}

export { ExperimentCacher };
export function rustMultiply(arg0, arg1) {
  return LIBDISCORE_JSI.rustMultiply(arg0, arg1);
}
export function consumeLogs() {
  return LIBDISCORE_JSI.consumeLogs();
}
export const monotonicNowMs = clock.monotonicNowMs;
export { BlockedDomainsStore };
export function getFluxApi() {
  return LIBDISCORE_JSI.fluxApi;
}
export function crash() {
  LIBDISCORE_JSI.crash();
}
export function registerDevLogListener(arg0) {
  const result = LIBDISCORE_JSI.registerDevLogListener(arg0);
}
export function generateLaunchSignature(globalObject) {
  return LIBDISCORE_JSI.generateLaunchSignature(globalObject);
}
export function getHttpClientAPI() {
  return { httpRequest: LIBDISCORE_JSI.httpRequest, getHttpRequestStatus: LIBDISCORE_JSI.getHttpRequestStatus, cancelHttpRequest: LIBDISCORE_JSI.cancelHttpRequest, getTrackedRequestCount: LIBDISCORE_JSI.getTrackedRequestCount };
}
