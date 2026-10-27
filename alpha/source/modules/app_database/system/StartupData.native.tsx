// Module ID: 4868
// Function ID: 4869
// Name: react-native
// Dependencies: [4869, 2]
// Exports: getUserId, setUserId

// Module 4868 (react-native)
import react_nativeDefault from "react-native" /* 4869 */;
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
