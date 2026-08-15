// Module ID: 10133
// Function ID: 10134
// Name: getPushNotificationLogs
// Dependencies: [1218, 10134, 2]
// Exports: default

// Module 10133 (getPushNotificationLogs)
import fetchFingerprint from "fetchFingerprint";

const result = require("set").fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs(id) {
  const pushNotificationLogs = importDefault(10134).getPushNotificationLogs(id.getId());
  return pushNotificationLogs.then((arg0) => {
    let pushNotifications = JSON.parse(arg0).pushNotifications;
    if (pushNotifications == null) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};
