// Module ID: 16264
// Function ID: 16265
// Name: getClientVersionForChangelog
// Dependencies: [16265, 2]
// Exports: getClientVersionForChangelog

// Module 16264 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16265) /* getAppMajorVersion */.getAppMajorVersion();
};
