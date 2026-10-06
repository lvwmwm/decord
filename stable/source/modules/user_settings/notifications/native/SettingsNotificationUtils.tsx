// Module ID: 15022
// Function ID: 15023
// Name: SettingsNotificationUtils
// Dependencies: [1370, 4813, 2]
// Exports: hasAndroidNotificationChannels

// Module 15022 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1370 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(4813);
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
