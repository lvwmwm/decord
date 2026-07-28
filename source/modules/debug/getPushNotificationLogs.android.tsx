// Module ID: 10329
// Function ID: 79687
// Name: getPushNotificationLogs
// Dependencies: [1194, 10330, 2]
// Exports: default

// Module 10329 (getPushNotificationLogs)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs(id) {
  const pushNotificationLogs = importDefault(10330).getPushNotificationLogs(id.getId());
  return pushNotificationLogs.then((arg0) => {
    let pushNotifications = JSON.parse(arg0).pushNotifications;
    if (null == pushNotifications) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};
