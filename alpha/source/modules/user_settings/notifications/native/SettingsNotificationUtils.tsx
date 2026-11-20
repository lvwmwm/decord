// Module ID: 16769
// Function ID: 16770
// Name: SettingsNotificationUtils
// Dependencies: [1378, 4751, 2]
// Exports: hasAndroidNotificationChannels

// Module 16769 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(4751);
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
