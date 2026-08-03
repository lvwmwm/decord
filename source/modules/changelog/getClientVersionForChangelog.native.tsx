// Module ID: 16231
// Function ID: 16232
// Name: getClientVersionForChangelog
// Dependencies: [16232, 2]
// Exports: getClientVersionForChangelog

// Module 16231 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16232) /* getAppMajorVersion */.getAppMajorVersion();
};
