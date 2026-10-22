// Module ID: 16738
// Function ID: 16739
// Name: SettingsNotificationUtils
// Dependencies: [1384, 4926, 2]
// Exports: hasAndroidNotificationChannels

// Module 16738 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(4926);
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
