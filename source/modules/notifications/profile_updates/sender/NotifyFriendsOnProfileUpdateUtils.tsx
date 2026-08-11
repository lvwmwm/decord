// Module ID: 14937
// Function ID: 14938
// Name: onNotifyFriendsOnProfileUpdateSettingsChanged
// Dependencies: [3960, 676, 3993, 698, 2]
// Exports: onNotifyFriendsOnProfileUpdateSettingsChanged

// Module 14937 (onNotifyFriendsOnProfileUpdateSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx");

export const onNotifyFriendsOnProfileUpdateSettingsChanged = function onNotifyFriendsOnProfileUpdateSettingsChanged(notify_friends_on_profile_update) {
  const NotifyFriendsOnProfileUpdate = require(3993) /* explicitContentFromProto */.NotifyFriendsOnProfileUpdate;
  NotifyFriendsOnProfileUpdate.updateSetting(notify_friends_on_profile_update);
  let obj = importDefault(698);
  obj = { update_type: constants.ACCOUNT, notify_friends_on_profile_update };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
