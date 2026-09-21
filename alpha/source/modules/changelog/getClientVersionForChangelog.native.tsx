// Module ID: 17747
// Function ID: 17748
// Name: getClientVersionForChangelog
// Dependencies: [17748, 2]
// Exports: getClientVersionForChangelog

// Module 17747 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17748 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
