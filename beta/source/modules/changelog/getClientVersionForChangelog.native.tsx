// Module ID: 17751
// Function ID: 17752
// Name: getClientVersionForChangelog
// Dependencies: [17752, 2]
// Exports: getClientVersionForChangelog

// Module 17751 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17752 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
