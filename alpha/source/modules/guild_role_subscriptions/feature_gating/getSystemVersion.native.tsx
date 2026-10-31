// Module ID: 6835
// Function ID: 6836
// Name: getSystemVersion
// Dependencies: [4971, 2]
// Exports: getSystemVersion

// Module 6835 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4971 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
