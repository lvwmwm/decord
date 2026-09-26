// Module ID: 5812
// Function ID: 5813
// Name: getSystemVersion
// Dependencies: [4812, 2]
// Exports: getSystemVersion

// Module 5812 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4812 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};
