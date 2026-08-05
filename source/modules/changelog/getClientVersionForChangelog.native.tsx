// Module ID: 16244
// Function ID: 16245
// Name: getClientVersionForChangelog
// Dependencies: [16245, 2]
// Exports: getClientVersionForChangelog

// Module 16244 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16245) /* getAppMajorVersion */.getAppMajorVersion();
};
