// Module ID: 7016
// Function ID: 7017
// Name: getSystemVersion
// Dependencies: [5267, 2]
// Exports: getSystemVersion

// Module 7016 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5267 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
