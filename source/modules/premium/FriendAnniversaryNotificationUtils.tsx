// Module ID: 14381
// Function ID: 110005
// Name: onFriendAnniversaryNotificationSettingsChanged
// Dependencies: [653, 3770, 3803, 675, 2]
// Exports: onFriendAnniversaryNotificationSettingsChanged

// Module 14381 (onFriendAnniversaryNotificationSettingsChanged)
import { AnalyticEvents } from "ME";
import { NotificationSettingsUpdateType as closure_4 } from "AccountNotificationFlags";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/premium/FriendAnniversaryNotificationUtils.tsx");

export const onFriendAnniversaryNotificationSettingsChanged = function onFriendAnniversaryNotificationSettingsChanged(friend_anniversary_notifications) {
  const EnableFriendAnniversaryNotifications = require(3803) /* explicitContentFromProto */.EnableFriendAnniversaryNotifications;
  EnableFriendAnniversaryNotifications.updateSetting(friend_anniversary_notifications);
  let obj = importDefault(675);
  obj = { update_type: constants.ACCOUNT, friend_anniversary_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
