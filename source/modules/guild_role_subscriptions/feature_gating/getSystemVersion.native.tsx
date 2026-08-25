// Module ID: 5323
// Function ID: 5324
// Name: getSystemVersion
// Dependencies: [4359, 2]
// Exports: getSystemVersion

// Module 5323 (getSystemVersion)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4359 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DCDDeviceManager.getSystemVersion();
};
