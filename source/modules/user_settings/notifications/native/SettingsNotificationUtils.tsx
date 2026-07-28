// Module ID: 14420
// Function ID: 110250
// Name: hasAndroidNotificationChannels
// Dependencies: [477, 4145, 2]
// Exports: hasAndroidNotificationChannels

// Module 14420 (hasAndroidNotificationChannels)
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = require(477) /* set */.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(require(4145) /* getSystemVersion */.getSystemVersion(), 10) >= 26;
    const obj2 = require(4145) /* getSystemVersion */;
  }
  return isAndroidResult;
};
