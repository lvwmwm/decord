// Module ID: 2095
// Function ID: 2096
// Name: StartupData
// Dependencies: [17, 1370, 2096, 2]
// Exports: getUserId, setUserId

// Module 2095 (StartupData)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import react_nativeDefault from "react-native" /* 2096 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
const result = size.fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export const getUserId = function getUserId() {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault;
    const userId = obj2.getConstants().userId;
    let tmp6 = null;
    if (null != userId) {
      tmp6 = userId;
    }
    return tmp6;
  } else {
    let userId1 = NativeModules.DCDAppDatabase.userId;
    if (userId1 == null) {
      userId1 = null;
    }
    return userId1;
  }
};
export const setUserId = function setUserId(id) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault;
    obj2.setUserId(id);
  } else {
    const DCDAppDatabase = NativeModules.DCDAppDatabase;
    DCDAppDatabase.setUserId(id);
  }
};
