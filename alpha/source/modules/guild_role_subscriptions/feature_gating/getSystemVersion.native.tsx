// Module ID: 6750
// Function ID: 6751
// Name: getSystemVersion
// Dependencies: [4926, 2]
// Exports: getSystemVersion

// Module 6750 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4926 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
