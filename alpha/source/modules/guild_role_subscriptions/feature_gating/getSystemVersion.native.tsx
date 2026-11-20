// Module ID: 6493
// Function ID: 6494
// Name: getSystemVersion
// Dependencies: [4751, 2]
// Exports: getSystemVersion

// Module 6493 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4751 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
