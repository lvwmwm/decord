// Module ID: 17351
// Function ID: 17352
// Name: SettingsNotificationUtils
// Dependencies: [1381, 4962, 2]
// Exports: hasAndroidNotificationChannels

// Module 17351 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(4962);
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
