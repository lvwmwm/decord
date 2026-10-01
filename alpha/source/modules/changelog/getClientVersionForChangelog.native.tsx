// Module ID: 17354
// Function ID: 17355
// Name: getClientVersionForChangelog
// Dependencies: [17355, 2]
// Exports: getClientVersionForChangelog

// Module 17354 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17355 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
