// Module ID: 5033
// Function ID: 43348
// Name: getSystemVersion
// Dependencies: [4111, 2]
// Exports: getSystemVersion

// Module 5033 (getSystemVersion)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(4111) /* getSystemVersion */.getSystemVersion();
};
