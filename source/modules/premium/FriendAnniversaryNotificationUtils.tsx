// Module ID: 14209
// Function ID: 107483
// Name: onFriendAnniversaryNotificationSettingsChanged
// Dependencies: []
// Exports: onFriendAnniversaryNotificationSettingsChanged

// Module 14209 (onFriendAnniversaryNotificationSettingsChanged)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
let closure_4 = require(dependencyMap[1]).NotificationSettingsUpdateType;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/premium/FriendAnniversaryNotificationUtils.tsx");

export const onFriendAnniversaryNotificationSettingsChanged = function onFriendAnniversaryNotificationSettingsChanged(friend_anniversary_notifications) {
  const EnableFriendAnniversaryNotifications = require(dependencyMap[2]).EnableFriendAnniversaryNotifications;
  EnableFriendAnniversaryNotifications.updateSetting(friend_anniversary_notifications);
  let obj = importDefault(dependencyMap[3]);
  obj = { update_type: constants.ACCOUNT, friend_anniversary_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
