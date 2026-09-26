// Module ID: 17105
// Function ID: 17106
// Name: getClientVersionForChangelog
// Dependencies: [17106, 2]
// Exports: getClientVersionForChangelog

// Module 17105 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17106 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
