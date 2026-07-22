// Module ID: 14223
// Function ID: 107545
// Name: onFriendGamingActivityNotificationSettingsChanged
// Dependencies: []
// Exports: onFriendGamingActivityNotificationSettingsChanged

// Module 14223 (onFriendGamingActivityNotificationSettingsChanged)
let closure_3 = require(dependencyMap[0]).NotificationSettingsUpdateType;
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/notifications/friend_gaming_activity/FriendGamingActivityNotificationUtils.tsx");

export const onFriendGamingActivityNotificationSettingsChanged = function onFriendGamingActivityNotificationSettingsChanged(friend_gaming_activity_notifications) {
  const EnableFriendGamingActivityNotifications = require(dependencyMap[2]).EnableFriendGamingActivityNotifications;
  EnableFriendGamingActivityNotifications.updateSetting(friend_gaming_activity_notifications);
  let obj = importDefault(dependencyMap[3]);
  obj = { update_type: constants.ACCOUNT, friend_gaming_activity_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
