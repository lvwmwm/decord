// Module ID: 9871
// Function ID: 9872
// Name: getPushNotificationLogs
// Dependencies: [1218, 9872, 2]
// Exports: default

// Module 9871 (getPushNotificationLogs)
import fetchFingerprint from "fetchFingerprint";

const result = require("set").fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs(id) {
  const pushNotificationLogs = importDefault(9872).getPushNotificationLogs(id.getId());
  return pushNotificationLogs.then((arg0) => {
    let pushNotifications = JSON.parse(arg0).pushNotifications;
    if (pushNotifications == null) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};
