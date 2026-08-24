// Module ID: 6804
// Function ID: 6805
// Name: getSystemVersion
// Dependencies: [4358, 2]
// Exports: getSystemVersion

// Module 6804 (getSystemVersion)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4358 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DCDDeviceManager.getSystemVersion();
};
