// Module ID: 6612
// Function ID: 6613
// Name: getSystemVersion
// Dependencies: [4870, 2]
// Exports: getSystemVersion

// Module 6612 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4870 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
