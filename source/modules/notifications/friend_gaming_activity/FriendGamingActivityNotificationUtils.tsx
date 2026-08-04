// Module ID: 14585
// Function ID: 14586
// Name: onFriendGamingActivityNotificationSettingsChanged
// Dependencies: [3925, 676, 3958, 698, 2]
// Exports: onFriendGamingActivityNotificationSettingsChanged

// Module 14585 (onFriendGamingActivityNotificationSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/friend_gaming_activity/FriendGamingActivityNotificationUtils.tsx");

export const onFriendGamingActivityNotificationSettingsChanged = function onFriendGamingActivityNotificationSettingsChanged(friend_gaming_activity_notifications) {
  const EnableFriendGamingActivityNotifications = require(3958) /* explicitContentFromProto */.EnableFriendGamingActivityNotifications;
  EnableFriendGamingActivityNotifications.updateSetting(friend_gaming_activity_notifications);
  let obj = importDefault(698);
  obj = { update_type: constants.ACCOUNT, friend_gaming_activity_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
