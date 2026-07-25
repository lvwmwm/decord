// Module ID: 1900
// Function ID: 21351
// Name: getUserId
// Dependencies: [27, 477, 1901, 2]
// Exports: getUserId, setUserId

// Module 1900 (getUserId)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export const getUserId = function getUserId() {
  if (obj.isAndroid()) {
    const userId2 = importDefault(1901).getConstants().userId;
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
    importDefault(1901).setUserId(id);
    const obj2 = importDefault(1901);
  } else {
    const DCDAppDatabase = NativeModules.DCDAppDatabase;
    DCDAppDatabase.setUserId(id);
  }
};
