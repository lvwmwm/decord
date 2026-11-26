// Module ID: 17098
// Function ID: 17099
// Name: SettingsNotificationUtils
// Dependencies: [1379, 5000, 2]
// Exports: hasAndroidNotificationChannels

// Module 17098 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(5000);
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
