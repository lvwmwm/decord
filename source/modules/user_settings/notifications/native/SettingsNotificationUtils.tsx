// Module ID: 14442
// Function ID: 14443
// Name: hasAndroidNotificationChannels
// Dependencies: [500, 4169, 2]
// Exports: hasAndroidNotificationChannels

// Module 14442 (hasAndroidNotificationChannels)
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(require(4169) /* DCDDeviceManager */.getSystemVersion(), 10) >= 26;
    const tmpResult = require(4169) /* DCDDeviceManager */;
  }
  return isAndroidResult;
};
