// Module ID: 14736
// Function ID: 14737
// Name: hasAndroidNotificationChannels
// Dependencies: [500, 4322, 2]
// Exports: hasAndroidNotificationChannels

// Module 14736 (hasAndroidNotificationChannels)
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(require(4322) /* DCDDeviceManager */.getSystemVersion(), 10) >= 26;
    const tmpResult = require(4322) /* DCDDeviceManager */;
  }
  return isAndroidResult;
};
