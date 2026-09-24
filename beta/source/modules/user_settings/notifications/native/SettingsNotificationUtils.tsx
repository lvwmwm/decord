// Module ID: 15757
// Function ID: 15758
// Name: SettingsNotificationUtils
// Dependencies: [1368, 4769, 2]
// Exports: hasAndroidNotificationChannels

// Module 15757 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1368 */;
import DeviceUtils from "DeviceUtils" /* 4769 */;
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
