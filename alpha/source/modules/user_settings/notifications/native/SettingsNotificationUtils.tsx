// Module ID: 17465
// Function ID: 17466
// Name: SettingsNotificationUtils
// Dependencies: [1375, 4971, 2]
// Exports: hasAndroidNotificationChannels

// Module 17465 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(4971);
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
