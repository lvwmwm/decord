// Module ID: 10364
// Function ID: 10365
// Name: getPushNotificationLogs
// Dependencies: [1218, 10365, 2]
// Exports: default

// Module 10364 (getPushNotificationLogs)
import fetchFingerprint from "fetchFingerprint";

const result = require("set").fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs(id) {
  const pushNotificationLogs = importDefault(10365).getPushNotificationLogs(id.getId());
  return pushNotificationLogs.then((arg0) => {
    let pushNotifications = JSON.parse(arg0).pushNotifications;
    if (pushNotifications == null) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};
