// Module ID: 5038
// Function ID: 5039
// Name: react-native
// Dependencies: [5039, 2]
// Exports: getUserId, setUserId

// Module 5038 (react-native)
import react_nativeDefault from "react-native" /* 5039 */;
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
