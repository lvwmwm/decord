// Module ID: 6973
// Function ID: 6974
// Name: getSystemVersion
// Dependencies: [5100, 2]
// Exports: getSystemVersion

// Module 6973 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5100 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
