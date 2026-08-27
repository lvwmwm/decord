// Module ID: 16817
// Function ID: 16818
// Name: getClientVersionForChangelog
// Dependencies: [16818, 2]
// Exports: getClientVersionForChangelog

// Module 16817 (getClientVersionForChangelog)
import set from "set" /* 2 */;
import getAppMajorVersion from "getAppMajorVersion" /* 16818 */;

const result = set.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};
