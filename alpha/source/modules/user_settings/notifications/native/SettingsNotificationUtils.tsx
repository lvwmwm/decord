// Module ID: 16669
// Function ID: 16670
// Name: SettingsNotificationUtils
// Dependencies: [1384, 4923, 2]
// Exports: hasAndroidNotificationChannels

// Module 16669 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(4923);
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
