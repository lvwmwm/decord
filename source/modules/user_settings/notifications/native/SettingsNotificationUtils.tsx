// Module ID: 14678
// Function ID: 14679
// Name: hasAndroidNotificationChannels
// Dependencies: [500, 4283, 2]
// Exports: hasAndroidNotificationChannels

// Module 14678 (hasAndroidNotificationChannels)
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(require(4283) /* DCDDeviceManager */.getSystemVersion(), 10) >= 26;
    const tmpResult = require(4283) /* DCDDeviceManager */;
  }
  return isAndroidResult;
};
