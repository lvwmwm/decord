// Module ID: 5749
// Function ID: 5750
// Name: getSystemVersion
// Dependencies: [4767, 2]
// Exports: getSystemVersion

// Module 5749 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4767 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};
