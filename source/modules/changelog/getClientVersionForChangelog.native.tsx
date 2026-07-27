// Module ID: 16071
// Function ID: 124333
// Name: getClientVersionForChangelog
// Dependencies: [16072, 2]
// Exports: getClientVersionForChangelog

// Module 16071 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16072) /* getAppMajorVersion */.getAppMajorVersion();
};
