// Module ID: 16634
// Function ID: 16635
// Name: getClientVersionForChangelog
// Dependencies: [16635, 2]
// Exports: getClientVersionForChangelog

// Module 16634 (getClientVersionForChangelog)
import set from "set" /* 2 */;
import getAppMajorVersion from "getAppMajorVersion" /* 16635 */;

const result = set.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};
