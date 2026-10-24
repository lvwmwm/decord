// Module ID: 6764
// Function ID: 6765
// Name: getSystemVersion
// Dependencies: [4928, 2]
// Exports: getSystemVersion

// Module 6764 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4928 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
