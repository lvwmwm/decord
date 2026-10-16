// Module ID: 6247
// Function ID: 6248
// Name: getSystemVersion
// Dependencies: [5130, 2]
// Exports: getSystemVersion

// Module 6247 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
