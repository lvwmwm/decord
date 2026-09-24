// Module ID: 17761
// Function ID: 17762
// Name: getClientVersionForChangelog
// Dependencies: [17762, 2]
// Exports: getClientVersionForChangelog

// Module 17761 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17762 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
