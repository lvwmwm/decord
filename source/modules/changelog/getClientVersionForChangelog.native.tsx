// Module ID: 16480
// Function ID: 16481
// Name: getClientVersionForChangelog
// Dependencies: [16481, 2]
// Exports: getClientVersionForChangelog

// Module 16480 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16481) /* getAppMajorVersion */.getAppMajorVersion();
};
