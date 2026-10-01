// Module ID: 15034
// Function ID: 15035
// Name: SettingsNotificationUtils
// Dependencies: [1364, 4812, 2]
// Exports: hasAndroidNotificationChannels

// Module 15034 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(4812);
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
