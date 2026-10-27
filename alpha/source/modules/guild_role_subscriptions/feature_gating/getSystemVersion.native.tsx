// Module ID: 6765
// Function ID: 6766
// Name: getSystemVersion
// Dependencies: [4929, 2]
// Exports: getSystemVersion

// Module 6765 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4929 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
