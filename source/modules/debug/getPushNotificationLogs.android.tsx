// Module ID: 10288
// Function ID: 79553
// Name: getPushNotificationLogs
// Dependencies: [1194, 10289, 2]
// Exports: default

// Module 10288 (getPushNotificationLogs)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs(id) {
  const pushNotificationLogs = importDefault(10289).getPushNotificationLogs(id.getId());
  return pushNotificationLogs.then((arg0) => {
    let pushNotifications = JSON.parse(arg0).pushNotifications;
    if (null == pushNotifications) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};
