// Module ID: 13557
// Function ID: 13558
// Name: setClientState
// Dependencies: [17, 500, 502, 2]
// Exports: setClientState

// Module 13557 (setClientState)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(closure_17, arg1) {
  if (obj.isAndroid()) {
    let str;
    if (closure_17 != null) {
      str = closure_17.toString();
    }
    importDefault(502).setClientState(str, undefined);
    const obj2 = importDefault(502);
  } else {
    const DCDFastConnectManager = NativeModules.DCDFastConnectManager;
    let tmp4 = closure_17;
    if (closure_17 == null) {
      tmp4 = null;
    }
    DCDFastConnectManager.setClientState(tmp4, null);
  }
};
