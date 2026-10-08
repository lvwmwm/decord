// Module ID: 6033
// Function ID: 6034
// Name: getSystemVersion
// Dependencies: [5066, 2]
// Exports: getSystemVersion

// Module 6033 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5066 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
