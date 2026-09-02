// Module ID: 5450
// Function ID: 5451
// Name: getSystemVersion
// Dependencies: [4457, 2]
// Exports: getSystemVersion

// Module 5450 (getSystemVersion)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4457 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DCDDeviceManager.getSystemVersion();
};
