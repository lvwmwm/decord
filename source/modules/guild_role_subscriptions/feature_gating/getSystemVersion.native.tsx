// Module ID: 5460
// Function ID: 5461
// Name: getSystemVersion
// Dependencies: [4460, 2]
// Exports: getSystemVersion

// Module 5460 (getSystemVersion)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4460 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DCDDeviceManager.getSystemVersion();
};
