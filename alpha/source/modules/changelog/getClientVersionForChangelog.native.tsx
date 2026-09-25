// Module ID: 17077
// Function ID: 17078
// Name: getClientVersionForChangelog
// Dependencies: [17078, 2]
// Exports: getClientVersionForChangelog

// Module 17077 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17078 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
