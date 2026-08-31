// Module ID: 5410
// Function ID: 5411
// Name: getSystemVersion
// Dependencies: [4427, 2]
// Exports: getSystemVersion

// Module 5410 (getSystemVersion)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4427 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DCDDeviceManager.getSystemVersion();
};
