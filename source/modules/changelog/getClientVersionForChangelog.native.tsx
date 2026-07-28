// Module ID: 16110
// Function ID: 124489
// Name: getClientVersionForChangelog
// Dependencies: [16111, 2]
// Exports: getClientVersionForChangelog

// Module 16110 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16111) /* getAppMajorVersion */.getAppMajorVersion();
};
