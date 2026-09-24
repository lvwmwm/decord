// Module ID: 5751
// Function ID: 5752
// Name: getSystemVersion
// Dependencies: [4769, 2]
// Exports: getSystemVersion

// Module 5751 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4769 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};
