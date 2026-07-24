// Module ID: 14364
// Function ID: 109945
// Name: hasAndroidNotificationChannels
// Dependencies: [477, 4110, 2]
// Exports: hasAndroidNotificationChannels

// Module 14364 (hasAndroidNotificationChannels)
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = require(477) /* set */.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(require(4110) /* getSystemVersion */.getSystemVersion(), 10) >= 26;
    const obj2 = require(4110) /* getSystemVersion */;
  }
  return isAndroidResult;
};
