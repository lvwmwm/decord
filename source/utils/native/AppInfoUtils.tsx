// Module ID: 16905
// Function ID: 16906
// Name: getAppMajorVersion
// Dependencies: [1625, 2]
// Exports: getAppMajorVersion

// Module 16905 (getAppMajorVersion)
import set from "set" /* 2 */;
import getConstants from "getConstants" /* 1625 */;

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
