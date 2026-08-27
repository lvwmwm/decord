// Module ID: 16818
// Function ID: 16819
// Name: getAppMajorVersion
// Dependencies: [1626, 2]
// Exports: getAppMajorVersion

// Module 16818 (getAppMajorVersion)
import set from "set" /* 2 */;
import getConstants from "getConstants" /* 1626 */;

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
