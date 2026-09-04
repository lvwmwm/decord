// Module ID: 15836
// Function ID: 15837
// Name: onNotifyFriendsOnProfileUpdateSettingsChanged
// Dependencies: [4133, 673, 4166, 695, 2]
// Exports: onNotifyFriendsOnProfileUpdateSettingsChanged

// Module 15836 (onNotifyFriendsOnProfileUpdateSettingsChanged)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4133 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;

let closure_3 = AccountNotificationFlags.NotificationSettingsUpdateType;
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx");

export const onNotifyFriendsOnProfileUpdateSettingsChanged = function onNotifyFriendsOnProfileUpdateSettingsChanged(notify_friends_on_profile_update) {
  const NotifyFriendsOnProfileUpdate = explicitContentFromProto.NotifyFriendsOnProfileUpdate;
  NotifyFriendsOnProfileUpdate.updateSetting(notify_friends_on_profile_update);
  let obj = expandEventPropertiesDefault;
  obj = { update_type: constants.ACCOUNT, notify_friends_on_profile_update };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
