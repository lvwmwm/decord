// Module ID: 12984
// Function ID: 98827
// Name: setClientState
// Dependencies: []
// Exports: setClientState

// Module 12984 (setClientState)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(closure_22, arg1) {
  if (obj.isAndroid()) {
    let str;
    if (null != closure_22) {
      str = closure_22.toString();
    }
    let tmp9;
    if (null != str) {
      tmp9 = str;
    }
    importDefault(dependencyMap[2]).setClientState(tmp9, undefined);
    const obj2 = importDefault(dependencyMap[2]);
  } else {
    const DCDFastConnectManager = NativeModules.DCDFastConnectManager;
    let tmp3 = null;
    if (null != closure_22) {
      tmp3 = closure_22;
    }
    DCDFastConnectManager.setClientState(tmp3, null);
  }
};
