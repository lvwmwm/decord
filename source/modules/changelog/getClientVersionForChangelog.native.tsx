// Module ID: 16469
// Function ID: 16470
// Name: getClientVersionForChangelog
// Dependencies: [16470, 2]
// Exports: getClientVersionForChangelog

// Module 16469 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16470) /* getAppMajorVersion */.getAppMajorVersion();
};
