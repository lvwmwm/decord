// Module ID: 16539
// Function ID: 16540
// Name: getClientVersionForChangelog
// Dependencies: [16540, 2]
// Exports: getClientVersionForChangelog

// Module 16539 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16540) /* getAppMajorVersion */.getAppMajorVersion();
};
