// Module ID: 14561
// Function ID: 14562
// Name: hasAndroidNotificationChannels
// Dependencies: [500, 4265, 2]
// Exports: hasAndroidNotificationChannels

// Module 14561 (hasAndroidNotificationChannels)
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(require(4265) /* DCDDeviceManager */.getSystemVersion(), 10) >= 26;
    const tmpResult = require(4265) /* DCDDeviceManager */;
  }
  return isAndroidResult;
};
