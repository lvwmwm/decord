// Module ID: 16001
// Function ID: 123796
// Name: getClientVersionForChangelog
// Dependencies: [16002, 2]
// Exports: getClientVersionForChangelog

// Module 16001 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16002) /* getAppMajorVersion */.getAppMajorVersion();
};
