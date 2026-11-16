// Module ID: 7008
// Function ID: 7009
// Name: getSystemVersion
// Dependencies: [5263, 2]
// Exports: getSystemVersion

// Module 7008 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5263 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
