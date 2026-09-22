// Module ID: 10319
// Function ID: 10320
// Name: getPushNotificationLogs
// Dependencies: [502, 9819, 2]
// Exports: default

// Module 10319 (getPushNotificationLogs)
import NativePushNotificationMonitorModuleDefault from "NativePushNotificationMonitorModule" /* 9819 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs() {
  const pushNotificationLogs = NativePushNotificationMonitorModuleDefault.getPushNotificationLogs(AuthenticationStore.getId());
  return pushNotificationLogs.then((result) => {
    let pushNotifications = JSON.parse(result).pushNotifications;
    if (pushNotifications == null) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};
