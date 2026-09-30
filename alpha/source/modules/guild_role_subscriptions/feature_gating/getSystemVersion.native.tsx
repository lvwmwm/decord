// Module ID: 6009
// Function ID: 6010
// Name: getSystemVersion
// Dependencies: [4842, 2]
// Exports: getSystemVersion

// Module 6009 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4842 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};
