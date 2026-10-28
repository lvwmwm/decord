// Module ID: 6796
// Function ID: 6797
// Name: getSystemVersion
// Dependencies: [4960, 2]
// Exports: getSystemVersion

// Module 6796 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4960 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
