// Module ID: 9852
// Function ID: 9853
// Name: getPushNotificationLogs
// Dependencies: [502, 8947, 2]
// Exports: default

// Module 9852 (getPushNotificationLogs)
import NativePushNotificationMonitorModuleDefault from "NativePushNotificationMonitorModule" /* 8947 */;
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
