// Module ID: 6712
// Function ID: 6713
// Name: getSystemVersion
// Dependencies: [4902, 2]
// Exports: getSystemVersion

// Module 6712 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4902 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
