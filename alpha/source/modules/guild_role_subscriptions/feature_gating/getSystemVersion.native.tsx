// Module ID: 6799
// Function ID: 6800
// Name: getSystemVersion
// Dependencies: [4961, 2]
// Exports: getSystemVersion

// Module 6799 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4961 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
