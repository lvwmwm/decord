// Module ID: 14192
// Function ID: 107423
// Name: hasAndroidNotificationChannels
// Dependencies: []
// Exports: hasAndroidNotificationChannels

// Module 14192 (hasAndroidNotificationChannels)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = require(dependencyMap[0]).isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(require(dependencyMap[1]).getSystemVersion(), 10) >= 26;
    const obj2 = require(dependencyMap[1]);
  }
  return isAndroidResult;
};
