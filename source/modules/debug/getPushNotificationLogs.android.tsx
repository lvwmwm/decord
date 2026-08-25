// Module ID: 10022
// Function ID: 10023
// Name: getPushNotificationLogs
// Dependencies: [1218, 10023, 2]
// Exports: default

// Module 10022 (getPushNotificationLogs)
import enforcingDefault from "enforcing" /* 10023 */;
import closure_2 from "fetchFingerprint" /* 1218 */;

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
