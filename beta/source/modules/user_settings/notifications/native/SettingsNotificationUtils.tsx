// Module ID: 16904
// Function ID: 16905
// Name: SettingsNotificationUtils
// Dependencies: [1378, 4870, 2]
// Exports: hasAndroidNotificationChannels

// Module 16904 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let tmp;
const DeviceUtils = tmp(4870);
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
