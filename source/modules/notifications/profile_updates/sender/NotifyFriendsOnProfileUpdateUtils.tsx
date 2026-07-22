// Module ID: 14459
// Function ID: 108947
// Name: onNotifyFriendsOnProfileUpdateSettingsChanged
// Dependencies: []
// Exports: onNotifyFriendsOnProfileUpdateSettingsChanged

// Module 14459 (onNotifyFriendsOnProfileUpdateSettingsChanged)
let closure_3 = require(dependencyMap[0]).NotificationSettingsUpdateType;
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx");

export const onNotifyFriendsOnProfileUpdateSettingsChanged = function onNotifyFriendsOnProfileUpdateSettingsChanged(notify_friends_on_profile_update) {
  const NotifyFriendsOnProfileUpdate = require(dependencyMap[2]).NotifyFriendsOnProfileUpdate;
  NotifyFriendsOnProfileUpdate.updateSetting(notify_friends_on_profile_update);
  let obj = importDefault(dependencyMap[3]);
  obj = { update_type: constants.ACCOUNT, notify_friends_on_profile_update };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
