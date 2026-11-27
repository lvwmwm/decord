// Module ID: 19690
// Function ID: 19691
// Name: react-native
// Dependencies: [1378, 2]
// Exports: getAppMajorVersion

// Module 19690 (react-native)
import react_native from "react-native" /* 1378 */;
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
