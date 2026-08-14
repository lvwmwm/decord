// Module ID: 15009
// Function ID: 15010
// Name: onNotifyFriendsOnProfileUpdateSettingsChanged
// Dependencies: [4001, 676, 4034, 698, 2]
// Exports: onNotifyFriendsOnProfileUpdateSettingsChanged

// Module 15009 (onNotifyFriendsOnProfileUpdateSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx");

export const onNotifyFriendsOnProfileUpdateSettingsChanged = function onNotifyFriendsOnProfileUpdateSettingsChanged(notify_friends_on_profile_update) {
  const NotifyFriendsOnProfileUpdate = require(4034) /* explicitContentFromProto */.NotifyFriendsOnProfileUpdate;
  NotifyFriendsOnProfileUpdate.updateSetting(notify_friends_on_profile_update);
  let obj = importDefault(698);
  obj = { update_type: constants.ACCOUNT, notify_friends_on_profile_update };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
