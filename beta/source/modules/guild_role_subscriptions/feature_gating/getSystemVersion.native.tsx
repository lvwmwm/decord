// Module ID: 5813
// Function ID: 5814
// Name: getSystemVersion
// Dependencies: [4813, 2]
// Exports: getSystemVersion

// Module 5813 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4813 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
