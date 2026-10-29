// Module ID: 6822
// Function ID: 6823
// Name: getSystemVersion
// Dependencies: [4962, 2]
// Exports: getSystemVersion

// Module 6822 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4962 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
