// Module ID: 17440
// Function ID: 17441
// Name: getClientVersionForChangelog
// Dependencies: [17441, 2]
// Exports: getClientVersionForChangelog

// Module 17440 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17441 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
