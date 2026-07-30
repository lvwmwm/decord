// Module ID: 16139
// Function ID: 16140
// Name: getClientVersionForChangelog
// Dependencies: [16140, 2]
// Exports: getClientVersionForChangelog

// Module 16139 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16140) /* getAppMajorVersion */.getAppMajorVersion();
};
