// Module ID: 17047
// Function ID: 17048
// Name: SettingsNotificationUtils
// Dependencies: [1378, 4969, 2]
// Exports: hasAndroidNotificationChannels

// Module 17047 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(4969);
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export function hasAndroidNotificationChannels() {
  const obj = PlatformUtils;
  let isAndroidResult = obj.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    const tmpResult = DeviceUtils;
    isAndroidResult = parseInt(tmpResult.getSystemVersion(), 10) >= 26;
  }
  return isAndroidResult;
}
