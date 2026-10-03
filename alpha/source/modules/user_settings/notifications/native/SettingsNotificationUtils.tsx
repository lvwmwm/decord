// Module ID: 15303
// Function ID: 15304
// Name: SettingsNotificationUtils
// Dependencies: [1369, 4866, 2]
// Exports: hasAndroidNotificationChannels

// Module 15303 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(4866);
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
