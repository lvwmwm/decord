// Module ID: 19612
// Function ID: 19613
// Name: react-native
// Dependencies: [1377, 2]
// Exports: getAppMajorVersion

// Module 19612 (react-native)
import react_native from "react-native" /* 1377 */;
import size from "module_2" /* 2 */;

const constants = react_native.getConstants();
const result = size.fileFinishedImporting("utils/native/AppInfoUtils.tsx");

export function getAppMajorVersion() {
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
}
