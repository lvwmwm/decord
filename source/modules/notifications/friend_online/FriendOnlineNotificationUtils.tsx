// Module ID: 14441
// Function ID: 110323
// Name: onFriendOnlineNotificationSettingsChanged
// Dependencies: [3805, 653, 3838, 675, 2]
// Exports: onFriendOnlineNotificationSettingsChanged, onNotifyFriendsOnComeOnlineSettingsChanged

// Module 14441 (onFriendOnlineNotificationSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/friend_online/FriendOnlineNotificationUtils.tsx");

export const onFriendOnlineNotificationSettingsChanged = function onFriendOnlineNotificationSettingsChanged(friend_online_notifications) {
  const EnableFriendOnlineNotifications = require(3838) /* explicitContentFromProto */.EnableFriendOnlineNotifications;
  EnableFriendOnlineNotifications.updateSetting(friend_online_notifications);
  let obj = importDefault(675);
  obj = { update_type: constants.ACCOUNT, friend_online_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
export const onNotifyFriendsOnComeOnlineSettingsChanged = function onNotifyFriendsOnComeOnlineSettingsChanged(notify_friends_on_come_online) {
  const NotifyFriendsOnComeOnline = require(3838) /* explicitContentFromProto */.NotifyFriendsOnComeOnline;
  NotifyFriendsOnComeOnline.updateSetting(notify_friends_on_come_online);
  let obj = importDefault(675);
  obj = { update_type: constants.ACCOUNT, notify_friends_on_come_online };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
