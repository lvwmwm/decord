// Module ID: 5029
// Function ID: 43313
// Name: getSystemVersion
// Dependencies: []
// Exports: getSystemVersion

// Module 5029 (getSystemVersion)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(dependencyMap[0]).getSystemVersion();
};
