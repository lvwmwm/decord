// Module ID: 15747
// Function ID: 15748
// Name: SettingsNotificationUtils
// Dependencies: [1368, 4737, 2]
// Exports: hasAndroidNotificationChannels

// Module 15747 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1368 */;
import DeviceUtils from "DeviceUtils" /* 4737 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(DeviceUtils.getSystemVersion(), 10) >= 26;
    const tmpResult = DeviceUtils;
  }
  return isAndroidResult;
};
