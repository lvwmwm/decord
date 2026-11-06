// Module ID: 5066
// Function ID: 5067
// Name: react-native
// Dependencies: [5067, 2]
// Exports: getUserId, setUserId

// Module 5066 (react-native)
import react_nativeDefault from "react-native" /* 5067 */;
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
