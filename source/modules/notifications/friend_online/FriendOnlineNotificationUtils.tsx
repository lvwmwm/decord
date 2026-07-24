// Module ID: 14385
// Function ID: 110018
// Name: onFriendOnlineNotificationSettingsChanged
// Dependencies: [3770, 653, 3803, 675, 2]
// Exports: onFriendOnlineNotificationSettingsChanged, onNotifyFriendsOnComeOnlineSettingsChanged

// Module 14385 (onFriendOnlineNotificationSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/friend_online/FriendOnlineNotificationUtils.tsx");

export const onFriendOnlineNotificationSettingsChanged = function onFriendOnlineNotificationSettingsChanged(friend_online_notifications) {
  const EnableFriendOnlineNotifications = require(3803) /* explicitContentFromProto */.EnableFriendOnlineNotifications;
  EnableFriendOnlineNotifications.updateSetting(friend_online_notifications);
  let obj = importDefault(675);
  obj = { update_type: constants.ACCOUNT, friend_online_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
export const onNotifyFriendsOnComeOnlineSettingsChanged = function onNotifyFriendsOnComeOnlineSettingsChanged(notify_friends_on_come_online) {
  const NotifyFriendsOnComeOnline = require(3803) /* explicitContentFromProto */.NotifyFriendsOnComeOnline;
  NotifyFriendsOnComeOnline.updateSetting(notify_friends_on_come_online);
  let obj = importDefault(675);
  obj = { update_type: constants.ACCOUNT, notify_friends_on_come_online };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
