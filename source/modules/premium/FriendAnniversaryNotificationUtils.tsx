// Module ID: 15423
// Function ID: 15424
// Name: onFriendAnniversaryNotificationSettingsChanged
// Dependencies: [673, 4133, 4166, 695, 2]
// Exports: onFriendAnniversaryNotificationSettingsChanged

// Module 15423 (onFriendAnniversaryNotificationSettingsChanged)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4133 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;

const AnalyticEvents = ME.AnalyticEvents;
let closure_4 = AccountNotificationFlags.NotificationSettingsUpdateType;
const result = set.fileFinishedImporting("modules/premium/FriendAnniversaryNotificationUtils.tsx");

export const onFriendAnniversaryNotificationSettingsChanged = function onFriendAnniversaryNotificationSettingsChanged(friend_anniversary_notifications) {
  const EnableFriendAnniversaryNotifications = explicitContentFromProto.EnableFriendAnniversaryNotifications;
  EnableFriendAnniversaryNotifications.updateSetting(friend_anniversary_notifications);
  let obj = expandEventPropertiesDefault;
  obj = { update_type: constants.ACCOUNT, friend_anniversary_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
