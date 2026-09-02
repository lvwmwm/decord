// Module ID: 17141
// Function ID: 17142
// Name: getAppMajorVersion
// Dependencies: [1624, 2]
// Exports: getAppMajorVersion

// Module 17141 (getAppMajorVersion)
import set from "set" /* 2 */;
import getConstants from "getConstants" /* 1624 */;

const constants = getConstants.getConstants();
const result = set.fileFinishedImporting("utils/native/AppInfoUtils.tsx");

export const getAppMajorVersion = function getAppMajorVersion() {
  if (undefined === closure_0) {
    return -1;
  } else {
    const parts = tmp.Version.split(".");
    let num = -1;
    if (2 === parts.length) {
      const _Number = Number;
      num = Number(parts[0]);
    }
    return num;
  }
};
