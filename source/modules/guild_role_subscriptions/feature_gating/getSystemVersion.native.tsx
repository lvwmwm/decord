// Module ID: 5169
// Function ID: 5170
// Name: getSystemVersion
// Dependencies: [4235, 2]
// Exports: getSystemVersion

// Module 5169 (getSystemVersion)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(4235) /* DCDDeviceManager */.getSystemVersion();
};
