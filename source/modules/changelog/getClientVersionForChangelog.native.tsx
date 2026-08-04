// Module ID: 16263
// Function ID: 16264
// Name: getClientVersionForChangelog
// Dependencies: [16264, 2]
// Exports: getClientVersionForChangelog

// Module 16263 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16264) /* getAppMajorVersion */.getAppMajorVersion();
};
