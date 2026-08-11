// Module ID: 1972
// Function ID: 1973
// Name: getUserId
// Dependencies: [17, 500, 1973, 2]
// Exports: getUserId, setUserId

// Module 1972 (getUserId)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export const getUserId = function getUserId() {
  if (obj.isAndroid()) {
    let userId = importDefault(1973).getConstants().userId;
    let tmp6 = null;
    if (null != userId) {
      tmp6 = userId;
    }
    return tmp6;
  } else {
    userId = NativeModules.DCDAppDatabase.userId;
    if (userId == null) {
      userId = null;
    }
    return userId;
  }
  obj = require(500) /* set */;
};
export const setUserId = function setUserId(id) {
  if (obj.isAndroid()) {
    importDefault(1973).setUserId(id);
    const obj2 = importDefault(1973);
  } else {
    const DCDAppDatabase = NativeModules.DCDAppDatabase;
    DCDAppDatabase.setUserId(id);
  }
};
