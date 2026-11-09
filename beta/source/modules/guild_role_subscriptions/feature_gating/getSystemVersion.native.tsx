// Module ID: 6890
// Function ID: 6891
// Name: getSystemVersion
// Dependencies: [5097, 2]
// Exports: getSystemVersion

// Module 6890 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5097 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
}
