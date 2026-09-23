// Module ID: 17829
// Function ID: 17830
// Name: AppInfoUtils
// Dependencies: [1363, 2]
// Exports: getAppMajorVersion

// Module 17829 (AppInfoUtils)
import ClientInfoUtils from "ClientInfoUtils" /* 1363 */;
import size from "module_2" /* 2 */;

const constants = ClientInfoUtils.getConstants();
const result = size.fileFinishedImporting("utils/native/AppInfoUtils.tsx");

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
