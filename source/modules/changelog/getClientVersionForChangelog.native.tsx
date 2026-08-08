// Module ID: 16387
// Function ID: 16388
// Name: getClientVersionForChangelog
// Dependencies: [16388, 2]
// Exports: getClientVersionForChangelog

// Module 16387 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16388) /* getAppMajorVersion */.getAppMajorVersion();
};
