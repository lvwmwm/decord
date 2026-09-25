// Module ID: 5807
// Function ID: 5808
// Name: getSystemVersion
// Dependencies: [4808, 2]
// Exports: getSystemVersion

// Module 5807 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};
