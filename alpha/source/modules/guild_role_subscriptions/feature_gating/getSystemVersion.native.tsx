// Module ID: 6970
// Function ID: 6971
// Name: getSystemVersion
// Dependencies: [5098, 2]
// Exports: getSystemVersion

// Module 6970 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5098 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
