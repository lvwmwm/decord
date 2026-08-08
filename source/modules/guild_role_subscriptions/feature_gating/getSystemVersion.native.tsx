// Module ID: 5217
// Function ID: 5218
// Name: getSystemVersion
// Dependencies: [4283, 2]
// Exports: getSystemVersion

// Module 5217 (getSystemVersion)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(4283) /* DCDDeviceManager */.getSystemVersion();
};
