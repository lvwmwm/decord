// Module ID: 1845
// Function ID: 20246
// Name: LIBDISCORE_JSI
// Dependencies: []
// Exports: consumeLogs, crash, generateLaunchSignature, getFluxApi, getHttpClientAPI, registerDevLogListener, rustMultiply

// Module 1845 (LIBDISCORE_JSI)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const NativeModules = arg1(dependencyMap[2]).NativeModules;
if (NativeModules.LibDiscoreModule) {
  let LibDiscoreModule = NativeModules.LibDiscoreModule;
} else {
  const _Proxy = Proxy;
  const obj = {
    get() {
        const error = new Error("The package 'react-native-libdiscore-jsi-module' doesn't seem to be linked");
        throw error;
      }
  };
  LibDiscoreModule = new Proxy({}, obj);
}
LibDiscoreModule.bridgeJSIFunctions();
const LIBDISCORE_JSI = arg1(dependencyMap[3]).typedGlobal.LIBDISCORE_JSI;
const tmp6 = () => {
  class BlockedDomainsStore {
    constructor() {
      tmp = BlockedDomainsStore(this, BlockedDomainsStore);
      return;
    }
  }
  let closure_0 = BlockedDomainsStore;
  let obj = {
    key: "isBlockedDomain",
    value(arg0) {
      return closure_2.isBlockedDomain(arg0);
    }
  };
  const items = [obj, ];
  obj = {
    key: "startFetchingBlockedDomains",
    value(combined) {
      const result = closure_2.startFetchingBlockedDomains(combined);
    }
  };
  items[1] = obj;
  return callback(BlockedDomainsStore, null, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("../discord_common/js/packages/libdiscore/mobile/js/index.tsx");

export const ExperimentCacher = LIBDISCORE_JSI.ExperimentCacher;
export const rustMultiply = function rustMultiply(arg0, arg1) {
  return LIBDISCORE_JSI.rustMultiply(arg0, arg1);
};
export const consumeLogs = function consumeLogs() {
  return LIBDISCORE_JSI.consumeLogs();
};
export const BlockedDomainsStore = tmp6;
export const getFluxApi = function getFluxApi() {
  return LIBDISCORE_JSI.fluxApi;
};
export const crash = function crash() {
  LIBDISCORE_JSI.crash();
};
export const registerDevLogListener = function registerDevLogListener(arg0) {
  const result = LIBDISCORE_JSI.registerDevLogListener(arg0);
};
export const generateLaunchSignature = function generateLaunchSignature(globalObject) {
  return LIBDISCORE_JSI.generateLaunchSignature(globalObject);
};
export const getHttpClientAPI = function getHttpClientAPI() {
  return { httpRequest: LIBDISCORE_JSI.httpRequest, getHttpRequestStatus: LIBDISCORE_JSI.getHttpRequestStatus, cancelHttpRequest: LIBDISCORE_JSI.cancelHttpRequest, getTrackedRequestCount: LIBDISCORE_JSI.getTrackedRequestCount };
};
