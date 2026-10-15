// Module ID: 6244
// Function ID: 6245
// Name: getSystemVersion
// Dependencies: [5127, 2]
// Exports: getSystemVersion

// Module 6244 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
