// Module ID: 5184
// Function ID: 5185
// Name: getSystemVersion
// Dependencies: [4265, 2]
// Exports: getSystemVersion

// Module 5184 (getSystemVersion)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(4265) /* DCDDeviceManager */.getSystemVersion();
};
