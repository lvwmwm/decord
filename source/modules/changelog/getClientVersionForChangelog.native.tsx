// Module ID: 17140
// Function ID: 17141
// Name: getClientVersionForChangelog
// Dependencies: [17141, 2]
// Exports: getClientVersionForChangelog

// Module 17140 (getClientVersionForChangelog)
import set from "set" /* 2 */;
import getAppMajorVersion from "getAppMajorVersion" /* 17141 */;

const result = set.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};
