// Module ID: 16945
// Function ID: 16946
// Name: SettingsNotificationUtils
// Dependencies: [1380, 4749, 2]
// Exports: hasAndroidNotificationChannels

// Module 16945 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(4749);
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
