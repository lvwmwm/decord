// Module ID: 18107
// Function ID: 18108
// Name: SettingsNotificationUtils
// Dependencies: [1380, 5263, 2]
// Exports: hasAndroidNotificationChannels

// Module 18107 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(5263);
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
