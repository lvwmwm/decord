// Module ID: 6829
// Function ID: 6830
// Name: getSystemVersion
// Dependencies: [4966, 2]
// Exports: getSystemVersion

// Module 6829 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4966 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
