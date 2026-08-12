// Module ID: 5256
// Function ID: 5257
// Name: getSystemVersion
// Dependencies: [4324, 2]
// Exports: getSystemVersion

// Module 5256 (getSystemVersion)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(4324) /* DCDDeviceManager */.getSystemVersion();
};
