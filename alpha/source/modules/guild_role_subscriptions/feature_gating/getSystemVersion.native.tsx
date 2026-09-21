// Module ID: 5717
// Function ID: 5718
// Name: getSystemVersion
// Dependencies: [4735, 2]
// Exports: getSystemVersion

// Module 5717 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4735 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};
