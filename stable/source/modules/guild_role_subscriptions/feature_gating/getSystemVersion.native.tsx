// Module ID: 5679
// Function ID: 5680
// Name: getSystemVersion
// Dependencies: [4866, 2]
// Exports: getSystemVersion

// Module 5679 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4866 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};
