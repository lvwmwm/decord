// Module ID: 15877
// Function ID: 121582
// Name: getAppMajorVersion
// Dependencies: []
// Exports: getAppMajorVersion

// Module 15877 (getAppMajorVersion)
const _module = require(dependencyMap[0]);
const constants = _module.getConstants();
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("utils/native/AppInfoUtils.tsx");

export const getAppMajorVersion = function getAppMajorVersion() {
  if (undefined === Version) {
    return -1;
  } else {
    const parts = Version.Version.split(".");
    let num = -1;
    if (2 === parts.length) {
      const _Number = Number;
      num = Number(parts[0]);
    }
    return num;
  }
};
