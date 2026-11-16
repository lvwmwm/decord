// Module ID: 6923
// Function ID: 6924
// Name: getSystemVersion
// Dependencies: [5127, 2]
// Exports: getSystemVersion

// Module 6923 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
