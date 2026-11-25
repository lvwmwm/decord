// Module ID: 6891
// Function ID: 6892
// Name: getSystemVersion
// Dependencies: [4969, 2]
// Exports: getSystemVersion

// Module 6891 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4969 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
