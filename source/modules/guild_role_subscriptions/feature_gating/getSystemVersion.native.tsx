// Module ID: 5032
// Function ID: 43331
// Name: getSystemVersion
// Dependencies: [4110, 2]
// Exports: getSystemVersion

// Module 5032 (getSystemVersion)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(4110) /* getSystemVersion */.getSystemVersion();
};
