// Module ID: 6491
// Function ID: 6492
// Name: getSystemVersion
// Dependencies: [4749, 2]
// Exports: getSystemVersion

// Module 6491 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4749 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
