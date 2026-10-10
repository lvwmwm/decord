// Module ID: 15759
// Function ID: 15760
// Name: SettingsNotificationUtils
// Dependencies: [1382, 5068, 2]
// Exports: hasAndroidNotificationChannels

// Module 15759 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(5068);
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
