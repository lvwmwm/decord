// Module ID: 4813
// Function ID: 4814
// Name: react-native
// Dependencies: [4814, 2]
// Exports: getUserId, setUserId

// Module 4813 (react-native)
import react_nativeDefault from "react-native" /* 4814 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export function getUserId() {
  const obj = react_nativeDefault;
  const userId = obj.getConstants().userId;
  let tmp = null;
  if (null != userId) {
    tmp = userId;
  }
  return tmp;
}
export function setUserId(id) {
  const obj = react_nativeDefault;
  obj.setUserId(id);
}
