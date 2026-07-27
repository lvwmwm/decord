// Module ID: 14376
// Function ID: 110077
// Name: hasAndroidNotificationChannels
// Dependencies: [477, 4111, 2]
// Exports: hasAndroidNotificationChannels

// Module 14376 (hasAndroidNotificationChannels)
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = require(477) /* set */.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(require(4111) /* getSystemVersion */.getSystemVersion(), 10) >= 26;
    const obj2 = require(4111) /* getSystemVersion */;
  }
  return isAndroidResult;
};
