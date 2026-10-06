// Module ID: 15322
// Function ID: 15323
// Name: SettingsNotificationUtils
// Dependencies: [1369, 4872, 2]
// Exports: hasAndroidNotificationChannels

// Module 15322 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(4872);
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
