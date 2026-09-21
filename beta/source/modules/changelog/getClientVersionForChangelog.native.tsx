// Module ID: 17750
// Function ID: 17751
// Name: getClientVersionForChangelog
// Dependencies: [17751, 2]
// Exports: getClientVersionForChangelog

// Module 17750 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17751 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
