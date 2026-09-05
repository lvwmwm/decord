// Module ID: 17326
// Function ID: 17327
// Name: getClientVersionForChangelog
// Dependencies: [17327, 2]
// Exports: getClientVersionForChangelog

// Module 17326 (getClientVersionForChangelog)
import set from "set" /* 2 */;
import getAppMajorVersion from "getAppMajorVersion" /* 17327 */;

const result = set.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};
