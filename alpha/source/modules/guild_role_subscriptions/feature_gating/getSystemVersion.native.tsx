// Module ID: 6893
// Function ID: 6894
// Name: getSystemVersion
// Dependencies: [5099, 2]
// Exports: getSystemVersion

// Module 6893 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
