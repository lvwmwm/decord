// Module ID: 17246
// Function ID: 17247
// Name: getClientVersionForChangelog
// Dependencies: [17247, 2]
// Exports: getClientVersionForChangelog

// Module 17246 (getClientVersionForChangelog)
import set from "set" /* 2 */;
import getAppMajorVersion from "getAppMajorVersion" /* 17247 */;

const result = set.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};
