// Module ID: 5278
// Function ID: 5279
// Name: getSystemVersion
// Dependencies: [4322, 2]
// Exports: getSystemVersion

// Module 5278 (getSystemVersion)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(4322) /* DCDDeviceManager */.getSystemVersion();
};
