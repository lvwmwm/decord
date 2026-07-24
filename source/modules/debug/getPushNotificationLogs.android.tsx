// Module ID: 10355
// Function ID: 79900
// Name: getPushNotificationLogs
// Dependencies: [1194, 10356, 2]
// Exports: default

// Module 10355 (getPushNotificationLogs)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs(id) {
  const pushNotificationLogs = importDefault(10356).getPushNotificationLogs(id.getId());
  return pushNotificationLogs.then((arg0) => {
    let pushNotifications = JSON.parse(arg0).pushNotifications;
    if (null == pushNotifications) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};
