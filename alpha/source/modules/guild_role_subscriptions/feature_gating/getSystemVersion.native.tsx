// Module ID: 6762
// Function ID: 6763
// Name: getSystemVersion
// Dependencies: [4926, 2]
// Exports: getSystemVersion

// Module 6762 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4926 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
