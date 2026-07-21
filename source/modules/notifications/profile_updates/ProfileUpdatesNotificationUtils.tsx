// Module ID: 14215
// Function ID: 107479
// Name: onProfileUpdatesNotificationSettingsChanged
// Dependencies: []
// Exports: onProfileUpdatesNotificationSettingsChanged

// Module 14215 (onProfileUpdatesNotificationSettingsChanged)
let closure_3 = require(dependencyMap[0]).NotificationSettingsUpdateType;
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/notifications/profile_updates/ProfileUpdatesNotificationUtils.tsx");

export const onProfileUpdatesNotificationSettingsChanged = function onProfileUpdatesNotificationSettingsChanged(profile_updates_notifications) {
  const EnableProfileUpdatesNotifications = require(dependencyMap[2]).EnableProfileUpdatesNotifications;
  EnableProfileUpdatesNotifications.updateSetting(profile_updates_notifications);
  let obj = importDefault(dependencyMap[3]);
  obj = { update_type: constants.ACCOUNT, profile_updates_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
