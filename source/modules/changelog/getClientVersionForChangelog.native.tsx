// Module ID: 16396
// Function ID: 16397
// Name: getClientVersionForChangelog
// Dependencies: [16397, 2]
// Exports: getClientVersionForChangelog

// Module 16396 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16397) /* getAppMajorVersion */.getAppMajorVersion();
};
