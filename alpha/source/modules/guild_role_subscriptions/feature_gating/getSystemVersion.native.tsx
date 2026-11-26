// Module ID: 6922
// Function ID: 6923
// Name: getSystemVersion
// Dependencies: [5000, 2]
// Exports: getSystemVersion

// Module 6922 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5000 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
