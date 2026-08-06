// Module ID: 16284
// Function ID: 16285
// Name: getClientVersionForChangelog
// Dependencies: [16285, 2]
// Exports: getClientVersionForChangelog

// Module 16284 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16285) /* getAppMajorVersion */.getAppMajorVersion();
};
