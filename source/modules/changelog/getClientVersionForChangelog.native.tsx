// Module ID: 17160
// Function ID: 17161
// Name: getClientVersionForChangelog
// Dependencies: [17161, 2]
// Exports: getClientVersionForChangelog

// Module 17160 (getClientVersionForChangelog)
import set from "set" /* 2 */;
import getAppMajorVersion from "getAppMajorVersion" /* 17161 */;

const result = set.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};
