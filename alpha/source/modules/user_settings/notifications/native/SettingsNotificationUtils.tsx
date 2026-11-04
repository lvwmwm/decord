// Module ID: 17723
// Function ID: 17724
// Name: SettingsNotificationUtils
// Dependencies: [1377, 5098, 2]
// Exports: hasAndroidNotificationChannels

// Module 17723 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(5098);
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
