// Module ID: 16489
// Function ID: 16490
// Name: getClientVersionForChangelog
// Dependencies: [16490, 2]
// Exports: getClientVersionForChangelog

// Module 16489 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16490) /* getAppMajorVersion */.getAppMajorVersion();
};
