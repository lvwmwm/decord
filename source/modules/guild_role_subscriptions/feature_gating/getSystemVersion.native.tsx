// Module ID: 5093
// Function ID: 5094
// Name: getSystemVersion
// Dependencies: [4173, 2]
// Exports: getSystemVersion

// Module 5093 (getSystemVersion)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(4173) /* DCDDeviceManager */.getSystemVersion();
};
