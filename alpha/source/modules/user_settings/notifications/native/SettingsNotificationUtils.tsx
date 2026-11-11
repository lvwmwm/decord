// Module ID: 17992
// Function ID: 17993
// Name: SettingsNotificationUtils
// Dependencies: [1377, 5200, 2]
// Exports: hasAndroidNotificationChannels

// Module 17992 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(5200);
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
