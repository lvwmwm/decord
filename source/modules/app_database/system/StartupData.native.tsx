// Module ID: 1899
// Function ID: 21340
// Name: getUserId
// Dependencies: [27, 477, 1900, 2]
// Exports: getUserId, setUserId

// Module 1899 (getUserId)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export const getUserId = function getUserId() {
  if (obj.isAndroid()) {
    const userId2 = importDefault(1900).getConstants().userId;
    let tmp5 = null;
    if (null != userId2) {
      tmp5 = userId2;
    }
    return tmp5;
  } else {
    const userId = NativeModules.DCDAppDatabase.userId;
    let tmp2 = null;
    if (null != userId) {
      tmp2 = userId;
    }
    return tmp2;
  }
  obj = require(477) /* set */;
};
export const setUserId = function setUserId(id) {
  if (obj.isAndroid()) {
    importDefault(1900).setUserId(id);
    const obj2 = importDefault(1900);
  } else {
    const DCDAppDatabase = NativeModules.DCDAppDatabase;
    DCDAppDatabase.setUserId(id);
  }
};
