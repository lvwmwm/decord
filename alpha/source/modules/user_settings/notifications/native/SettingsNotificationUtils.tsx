// Module ID: 15697
// Function ID: 15698
// Name: SettingsNotificationUtils
// Dependencies: [1382, 5067, 2]
// Exports: hasAndroidNotificationChannels

// Module 15697 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(5067);
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
