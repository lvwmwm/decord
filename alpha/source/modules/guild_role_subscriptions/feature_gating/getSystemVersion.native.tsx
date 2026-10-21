// Module ID: 6743
// Function ID: 6744
// Name: getSystemVersion
// Dependencies: [4923, 2]
// Exports: getSystemVersion

// Module 6743 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4923 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
