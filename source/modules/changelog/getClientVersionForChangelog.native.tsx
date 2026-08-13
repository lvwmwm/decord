// Module ID: 16471
// Function ID: 16472
// Name: getClientVersionForChangelog
// Dependencies: [16472, 2]
// Exports: getClientVersionForChangelog

// Module 16471 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16472) /* getAppMajorVersion */.getAppMajorVersion();
};
