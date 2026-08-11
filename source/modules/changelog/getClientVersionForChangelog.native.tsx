// Module ID: 16412
// Function ID: 16413
// Name: getClientVersionForChangelog
// Dependencies: [16413, 2]
// Exports: getClientVersionForChangelog

// Module 16412 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16413) /* getAppMajorVersion */.getAppMajorVersion();
};
