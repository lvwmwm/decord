// Module ID: 13167
// Function ID: 101388
// Name: setClientState
// Dependencies: [27, 477, 479, 2]
// Exports: setClientState

// Module 13167 (setClientState)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(outer2_22, arg1) {
  if (obj.isAndroid()) {
    let str;
    if (null != outer2_22) {
      str = outer2_22.toString();
    }
    let tmp9;
    if (null != str) {
      tmp9 = str;
    }
    importDefault(479).setClientState(tmp9, undefined);
    const obj2 = importDefault(479);
  } else {
    const DCDFastConnectManager = NativeModules.DCDFastConnectManager;
    let tmp3 = null;
    if (null != outer2_22) {
      tmp3 = outer2_22;
    }
    DCDFastConnectManager.setClientState(tmp3, null);
  }
};
