// Module ID: 17298
// Function ID: 17299
// Name: getClientVersionForChangelog
// Dependencies: [17299, 2]
// Exports: getClientVersionForChangelog

// Module 17298 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17299 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
