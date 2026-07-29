// Module ID: 16145
// Function ID: 16146
// Name: getClientVersionForChangelog
// Dependencies: [16146, 2]
// Exports: getClientVersionForChangelog

// Module 16145 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16146) /* getAppMajorVersion */.getAppMajorVersion();
};
