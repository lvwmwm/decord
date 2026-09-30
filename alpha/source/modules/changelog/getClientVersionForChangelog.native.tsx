// Module ID: 17333
// Function ID: 17334
// Name: getClientVersionForChangelog
// Dependencies: [17334, 2]
// Exports: getClientVersionForChangelog

// Module 17333 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17334 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
