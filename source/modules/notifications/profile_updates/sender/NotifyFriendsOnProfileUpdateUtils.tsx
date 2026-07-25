// Module ID: 14634
// Function ID: 111549
// Name: onNotifyFriendsOnProfileUpdateSettingsChanged
// Dependencies: [3771, 653, 3804, 675, 2]
// Exports: onNotifyFriendsOnProfileUpdateSettingsChanged

// Module 14634 (onNotifyFriendsOnProfileUpdateSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx");

export const onNotifyFriendsOnProfileUpdateSettingsChanged = function onNotifyFriendsOnProfileUpdateSettingsChanged(notify_friends_on_profile_update) {
  const NotifyFriendsOnProfileUpdate = require(3804) /* explicitContentFromProto */.NotifyFriendsOnProfileUpdate;
  NotifyFriendsOnProfileUpdate.updateSetting(notify_friends_on_profile_update);
  let obj = importDefault(675);
  obj = { update_type: constants.ACCOUNT, notify_friends_on_profile_update };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
