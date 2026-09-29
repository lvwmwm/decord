// Module ID: 17752
// Function ID: 17753
// Name: getClientVersionForChangelog
// Dependencies: [17753, 2]
// Exports: getClientVersionForChangelog

// Module 17752 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17753 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
