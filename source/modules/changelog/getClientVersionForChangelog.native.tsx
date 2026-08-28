// Module ID: 16835
// Function ID: 16836
// Name: getClientVersionForChangelog
// Dependencies: [16836, 2]
// Exports: getClientVersionForChangelog

// Module 16835 (getClientVersionForChangelog)
import set from "set" /* 2 */;
import getAppMajorVersion from "getAppMajorVersion" /* 16836 */;

const result = set.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};
