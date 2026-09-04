// Module ID: 10120
// Function ID: 10121
// Name: getPushNotificationLogs
// Dependencies: [1215, 9618, 2]
// Exports: default

// Module 10120 (getPushNotificationLogs)
import enforcingDefault from "enforcing" /* 9618 */;
import closure_2 from "fetchFingerprint" /* 1215 */;

const result = require("set").fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs(id) {
  const pushNotificationLogs = enforcingDefault.getPushNotificationLogs(id.getId());
  return pushNotificationLogs.then((arg0) => {
    let pushNotifications = JSON.parse(arg0).pushNotifications;
    if (pushNotifications == null) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};
