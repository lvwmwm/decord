// Module ID: 15504
// Function ID: 15505
// Name: onFriendGamingActivityNotificationSettingsChanged
// Dependencies: [4212, 1074, 1935, 1242, 2]
// Exports: onFriendGamingActivityNotificationSettingsChanged

// Module 15504 (onFriendGamingActivityNotificationSettingsChanged)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4212 */;

let closure_3 = AccountNotificationFlags.NotificationSettingsUpdateType;
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/notifications/friend_gaming_activity/FriendGamingActivityNotificationUtils.tsx");

export const onFriendGamingActivityNotificationSettingsChanged = function onFriendGamingActivityNotificationSettingsChanged(friend_gaming_activity_notifications) {
  const EnableFriendGamingActivityNotifications = explicitContentFromProto.EnableFriendGamingActivityNotifications;
  EnableFriendGamingActivityNotifications.updateSetting(friend_gaming_activity_notifications);
  let obj = expandEventPropertiesDefault;
  obj = { update_type: constants.ACCOUNT, friend_gaming_activity_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
