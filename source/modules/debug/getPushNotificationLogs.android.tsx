// Module ID: 10191
// Function ID: 10192
// Name: getPushNotificationLogs
// Dependencies: [502, 9689, 2]
// Exports: default

// Module 10191 (getPushNotificationLogs)
import enforcingDefault from "enforcing" /* 9689 */;
import closure_2 from "fetchFingerprint" /* 502 */;

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
