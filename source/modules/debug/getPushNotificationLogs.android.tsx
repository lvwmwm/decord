// Module ID: 9877
// Function ID: 9878
// Name: getPushNotificationLogs
// Dependencies: [1218, 9878, 2]
// Exports: default

// Module 9877 (getPushNotificationLogs)
import fetchFingerprint from "fetchFingerprint";

const result = require("set").fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs(id) {
  const pushNotificationLogs = importDefault(9878).getPushNotificationLogs(id.getId());
  return pushNotificationLogs.then((arg0) => {
    let pushNotifications = JSON.parse(arg0).pushNotifications;
    if (pushNotifications == null) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};
