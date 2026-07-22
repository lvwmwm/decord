// Module ID: 10313
// Function ID: 79635
// Name: getPushNotificationLogs
// Dependencies: []
// Exports: default

// Module 10313 (getPushNotificationLogs)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs(id) {
  const pushNotificationLogs = importDefault(dependencyMap[1]).getPushNotificationLogs(id.getId());
  return pushNotificationLogs.then((arg0) => {
    let pushNotifications = JSON.parse(arg0).pushNotifications;
    if (null == pushNotifications) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};
