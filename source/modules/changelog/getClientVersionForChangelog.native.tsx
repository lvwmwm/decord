// Module ID: 16904
// Function ID: 16905
// Name: getClientVersionForChangelog
// Dependencies: [16905, 2]
// Exports: getClientVersionForChangelog

// Module 16904 (getClientVersionForChangelog)
import set from "set" /* 2 */;
import getAppMajorVersion from "getAppMajorVersion" /* 16905 */;

const result = set.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};
