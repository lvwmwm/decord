// Module ID: 16666
// Function ID: 16667
// Name: getClientVersionForChangelog
// Dependencies: [16667, 2]
// Exports: getClientVersionForChangelog

// Module 16666 (getClientVersionForChangelog)
import set from "set" /* 2 */;
import getAppMajorVersion from "getAppMajorVersion" /* 16667 */;

const result = set.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};
