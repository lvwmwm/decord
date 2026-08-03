// Module ID: 14528
// Function ID: 14529
// Name: hasAndroidNotificationChannels
// Dependencies: [500, 4235, 2]
// Exports: hasAndroidNotificationChannels

// Module 14528 (hasAndroidNotificationChannels)
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(require(4235) /* DCDDeviceManager */.getSystemVersion(), 10) >= 26;
    const tmpResult = require(4235) /* DCDDeviceManager */;
  }
  return isAndroidResult;
};
