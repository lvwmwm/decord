// Module ID: 14215
// Function ID: 107520
// Name: onGoLiveNotificationSettingsChanged
// Dependencies: []
// Exports: onGoLiveNotificationSettingsChanged

// Module 14215 (onGoLiveNotificationSettingsChanged)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
let closure_4 = require(dependencyMap[1]).NotificationSettingsUpdateType;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/go_live/GoLiveNotificationUtils.tsx");

export const onGoLiveNotificationSettingsChanged = function onGoLiveNotificationSettingsChanged(go_live_notifications) {
  const StreamNotificationsEnabled = require(dependencyMap[2]).StreamNotificationsEnabled;
  StreamNotificationsEnabled.updateSetting(go_live_notifications);
  let obj = importDefault(dependencyMap[3]);
  obj = { update_type: constants.ACCOUNT, go_live_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
