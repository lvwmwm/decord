// Module ID: 4867
// Function ID: 4868
// Name: react-native
// Dependencies: [4868, 2]
// Exports: getUserId, setUserId

// Module 4867 (react-native)
import react_nativeDefault from "react-native" /* 4868 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export const getUserId = function getUserId() {
  const obj = react_nativeDefault;
  const userId = obj.getConstants().userId;
  let tmp = null;
  if (null != userId) {
    tmp = userId;
  }
  return tmp;
};
export const setUserId = function setUserId(id) {
  const obj = react_nativeDefault;
  obj.setUserId(id);
};
