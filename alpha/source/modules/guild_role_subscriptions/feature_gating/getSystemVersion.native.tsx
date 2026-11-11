// Module ID: 6945
// Function ID: 6946
// Name: getSystemVersion
// Dependencies: [5200, 2]
// Exports: getSystemVersion

// Module 6945 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5200 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
