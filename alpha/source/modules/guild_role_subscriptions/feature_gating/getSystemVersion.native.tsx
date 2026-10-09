// Module ID: 6035
// Function ID: 6036
// Name: getSystemVersion
// Dependencies: [5067, 2]
// Exports: getSystemVersion

// Module 6035 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5067 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
