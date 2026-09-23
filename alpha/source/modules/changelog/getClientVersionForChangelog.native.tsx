// Module ID: 17828
// Function ID: 17829
// Name: getClientVersionForChangelog
// Dependencies: [17829, 2]
// Exports: getClientVersionForChangelog

// Module 17828 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17829 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
