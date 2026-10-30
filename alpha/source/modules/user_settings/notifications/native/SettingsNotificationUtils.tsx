// Module ID: 17405
// Function ID: 17406
// Name: SettingsNotificationUtils
// Dependencies: [1376, 4966, 2]
// Exports: hasAndroidNotificationChannels

// Module 17405 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(4966);
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
