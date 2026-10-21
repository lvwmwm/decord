// Module ID: 4865
// Function ID: 4866
// Name: react-native
// Dependencies: [4866, 2]
// Exports: getUserId, setUserId

// Module 4865 (react-native)
import react_nativeDefault from "react-native" /* 4866 */;
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
