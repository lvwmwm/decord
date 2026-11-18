// Module ID: 6520
// Function ID: 6521
// Name: getSystemVersion
// Dependencies: [4780, 2]
// Exports: getSystemVersion

// Module 6520 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4780 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
