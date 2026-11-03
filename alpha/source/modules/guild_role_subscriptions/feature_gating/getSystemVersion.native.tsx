// Module ID: 6955
// Function ID: 6956
// Name: getSystemVersion
// Dependencies: [5098, 2]
// Exports: getSystemVersion

// Module 6955 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5098 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
