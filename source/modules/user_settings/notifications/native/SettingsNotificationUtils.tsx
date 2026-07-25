// Module ID: 14375
// Function ID: 110072
// Name: hasAndroidNotificationChannels
// Dependencies: [477, 4111, 2]
// Exports: hasAndroidNotificationChannels

// Module 14375 (hasAndroidNotificationChannels)
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
