// Module ID: 16049
// Function ID: 124120
// Name: getAppMajorVersion
// Dependencies: [1554, 2]
// Exports: getAppMajorVersion

// Module 16049 (getAppMajorVersion)
import getConstants from "getConstants";

getConstants = getConstants.getConstants();
const result = require("set").fileFinishedImporting("utils/native/AppInfoUtils.tsx");

export const getAppMajorVersion = function getAppMajorVersion() {
  if (undefined === getConstants) {
    return -1;
  } else {
    const parts = getConstants.Version.split(".");
    let num = -1;
    if (2 === parts.length) {
      const _Number = Number;
      num = Number(parts[0]);
    }
    return num;
  }
};
