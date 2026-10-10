// Module ID: 15780
// Function ID: 15781
// Name: FriendOnlineNotificationUtils
// Dependencies: [4763, 1085, 2041, 1265, 2]
// Exports: onFriendOnlineNotificationSettingsChanged, onNotifyFriendsOnComeOnlineSettingsChanged

// Module 15780 (FriendOnlineNotificationUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import UserSettings from "UserSettings" /* 2041 */;
import NotificationConstants from "NotificationConstants" /* 4763 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/friend_online/FriendOnlineNotificationUtils.tsx");

export const onFriendOnlineNotificationSettingsChanged = function onFriendOnlineNotificationSettingsChanged(friend_online_notifications) {
  const EnableFriendOnlineNotifications = UserSettings.EnableFriendOnlineNotifications;
  EnableFriendOnlineNotifications.updateSetting(friend_online_notifications);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, friend_online_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
};
export const onNotifyFriendsOnComeOnlineSettingsChanged = function onNotifyFriendsOnComeOnlineSettingsChanged(notify_friends_on_come_online) {
  const NotifyFriendsOnComeOnline = UserSettings.NotifyFriendsOnComeOnline;
  NotifyFriendsOnComeOnline.updateSetting(notify_friends_on_come_online);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, notify_friends_on_come_online };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
};
