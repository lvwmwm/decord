// Module ID: 14461
// Function ID: 14462
// Name: onFriendGamingActivityNotificationSettingsChanged
// Dependencies: [3829, 676, 3862, 698, 2]
// Exports: onFriendGamingActivityNotificationSettingsChanged

// Module 14461 (onFriendGamingActivityNotificationSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/friend_gaming_activity/FriendGamingActivityNotificationUtils.tsx");

export const onFriendGamingActivityNotificationSettingsChanged = function onFriendGamingActivityNotificationSettingsChanged(friend_gaming_activity_notifications) {
  const EnableFriendGamingActivityNotifications = require(3862) /* explicitContentFromProto */.EnableFriendGamingActivityNotifications;
  EnableFriendGamingActivityNotifications.updateSetting(friend_gaming_activity_notifications);
  let obj = importDefault(698);
  obj = { update_type: constants.ACCOUNT, friend_gaming_activity_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
