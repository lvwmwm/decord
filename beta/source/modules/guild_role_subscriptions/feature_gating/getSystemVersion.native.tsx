// Module ID: 5719
// Function ID: 5720
// Name: getSystemVersion
// Dependencies: [4737, 2]
// Exports: getSystemVersion

// Module 5719 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4737 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};
