// Module ID: 5998
// Function ID: 5999
// Name: getSystemVersion
// Dependencies: [4821, 2]
// Exports: getSystemVersion

// Module 5998 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4821 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};
