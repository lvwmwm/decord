// Module ID: 14459
// Function ID: 14460
// Name: onFriendAnniversaryNotificationSettingsChanged
// Dependencies: [676, 3829, 3862, 698, 2]
// Exports: onFriendAnniversaryNotificationSettingsChanged

// Module 14459 (onFriendAnniversaryNotificationSettingsChanged)
import { AnalyticEvents } from "ME";
import { NotificationSettingsUpdateType as closure_4 } from "AccountNotificationFlags";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/premium/FriendAnniversaryNotificationUtils.tsx");

export const onFriendAnniversaryNotificationSettingsChanged = function onFriendAnniversaryNotificationSettingsChanged(friend_anniversary_notifications) {
  const EnableFriendAnniversaryNotifications = require(3862) /* explicitContentFromProto */.EnableFriendAnniversaryNotifications;
  EnableFriendAnniversaryNotifications.updateSetting(friend_anniversary_notifications);
  let obj = importDefault(698);
  obj = { update_type: constants.ACCOUNT, friend_anniversary_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
