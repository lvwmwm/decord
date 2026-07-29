// Module ID: 5089
// Function ID: 5090
// Name: getSystemVersion
// Dependencies: [4169, 2]
// Exports: getSystemVersion

// Module 5089 (getSystemVersion)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(4169) /* DCDDeviceManager */.getSystemVersion();
};
