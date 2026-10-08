// Module ID: 12644
// Function ID: 12645
// Name: getPushNotificationLogs
// Dependencies: [502, 10822, 2]
// Exports: default

// Module 12644 (getPushNotificationLogs)
import react_nativeDefault from "react-native" /* 10822 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs() {
  const obj = react_nativeDefault;
  const pushNotificationLogs = obj.getPushNotificationLogs(AuthenticationStore.getId());
  return pushNotificationLogs.then((result) => {
    let pushNotifications = JSON.parse(result).pushNotifications;
    if (pushNotifications == null) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};
