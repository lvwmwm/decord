// Module ID: 1899
// Function ID: 21333
// Name: getUserId
// Dependencies: []
// Exports: getUserId, setUserId

// Module 1899 (getUserId)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export const getUserId = function getUserId() {
  if (obj.isAndroid()) {
    const userId2 = importDefault(dependencyMap[2]).getConstants().userId;
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
  const obj = require(dependencyMap[1]);
};
export const setUserId = function setUserId(id) {
  if (obj.isAndroid()) {
    importDefault(dependencyMap[2]).setUserId(id);
    const obj2 = importDefault(dependencyMap[2]);
  } else {
    const DCDAppDatabase = NativeModules.DCDAppDatabase;
    DCDAppDatabase.setUserId(id);
  }
};
