// Module ID: 16059
// Function ID: 124286
// Name: getClientVersionForChangelog
// Dependencies: [16060, 2]
// Exports: getClientVersionForChangelog

// Module 16059 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16060) /* getAppMajorVersion */.getAppMajorVersion();
};
