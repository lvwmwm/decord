// Module ID: 16310
// Function ID: 16311
// Name: getClientVersionForChangelog
// Dependencies: [16311, 2]
// Exports: getClientVersionForChangelog

// Module 16310 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16311) /* getAppMajorVersion */.getAppMajorVersion();
};
