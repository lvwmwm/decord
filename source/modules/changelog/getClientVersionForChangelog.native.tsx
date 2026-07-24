// Module ID: 16048
// Function ID: 124118
// Name: getClientVersionForChangelog
// Dependencies: [16049, 2]
// Exports: getClientVersionForChangelog

// Module 16048 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16049) /* getAppMajorVersion */.getAppMajorVersion();
};
