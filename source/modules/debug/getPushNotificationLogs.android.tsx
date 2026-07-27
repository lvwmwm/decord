// Module ID: 10289
// Function ID: 79558
// Name: getPushNotificationLogs
// Dependencies: [1194, 10290, 2]
// Exports: default

// Module 10289 (getPushNotificationLogs)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs(id) {
  const pushNotificationLogs = importDefault(10290).getPushNotificationLogs(id.getId());
  return pushNotificationLogs.then((arg0) => {
    let pushNotifications = JSON.parse(arg0).pushNotifications;
    if (null == pushNotifications) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};
