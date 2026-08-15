// Module ID: 6767
// Function ID: 6768
// Name: getSystemVersion
// Dependencies: [4354, 2]
// Exports: getSystemVersion

// Module 6767 (getSystemVersion)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(4354) /* DCDDeviceManager */.getSystemVersion();
};
