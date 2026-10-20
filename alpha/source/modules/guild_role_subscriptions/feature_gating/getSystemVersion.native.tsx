// Module ID: 6715
// Function ID: 6716
// Name: getSystemVersion
// Dependencies: [4902, 2]
// Exports: getSystemVersion

// Module 6715 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4902 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
