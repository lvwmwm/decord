// Module ID: 17498
// Function ID: 17499
// Name: react-native
// Dependencies: [1368, 2]
// Exports: getAppMajorVersion

// Module 17498 (react-native)
import react_native from "react-native" /* 1368 */;
import size from "module_2" /* 2 */;

const constants = react_native.getConstants();
const result = size.fileFinishedImporting("utils/native/AppInfoUtils.tsx");

export const getAppMajorVersion = function getAppMajorVersion() {
  if (undefined === closure_0) {
    return -1;
  } else {
    const str = tmp.Version;
    const parts = str.split(".");
    let num = -1;
    if (2 === parts.length) {
      const _Number = Number;
      num = Number(parts[0]);
    }
    return num;
  }
};
