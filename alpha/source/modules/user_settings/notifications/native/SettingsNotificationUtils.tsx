// Module ID: 15584
// Function ID: 15585
// Name: SettingsNotificationUtils
// Dependencies: [1381, 5066, 2]
// Exports: hasAndroidNotificationChannels

// Module 15584 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(5066);
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  const obj = PlatformUtils;
  let isAndroidResult = obj.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    const tmpResult = DeviceUtils;
    isAndroidResult = parseInt(tmpResult.getSystemVersion(), 10) >= 26;
  }
  return isAndroidResult;
};
