// Module ID: 5803
// Function ID: 5804
// Name: getSystemVersion
// Dependencies: [4806, 2]
// Exports: getSystemVersion

// Module 5803 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4806 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};
