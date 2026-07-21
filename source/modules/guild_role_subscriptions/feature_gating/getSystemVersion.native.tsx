// Module ID: 5302
// Function ID: 44903
// Name: getSystemVersion
// Dependencies: []
// Exports: getSystemVersion

// Module 5302 (getSystemVersion)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(dependencyMap[0]).getSystemVersion();
};
