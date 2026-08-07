// Module ID: 5216
// Function ID: 5217
// Name: getSystemVersion
// Dependencies: [4282, 2]
// Exports: getSystemVersion

// Module 5216 (getSystemVersion)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(4282) /* DCDDeviceManager */.getSystemVersion();
};
