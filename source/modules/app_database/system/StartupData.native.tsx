// Module ID: 1953
// Function ID: 1954
// Name: getUserId
// Dependencies: [17, 500, 1954, 2]
// Exports: getUserId, setUserId

// Module 1953 (getUserId)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export const getUserId = function getUserId() {
  if (obj.isAndroid()) {
    let userId = importDefault(1954).getConstants().userId;
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
    importDefault(1954).setUserId(id);
    const obj2 = importDefault(1954);
  } else {
    const DCDAppDatabase = NativeModules.DCDAppDatabase;
    DCDAppDatabase.setUserId(id);
  }
};
