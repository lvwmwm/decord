// Module ID: 14228
// Function ID: 107560
// Name: onServerTrendingNotificationSettingsChanged
// Dependencies: []
// Exports: onServerTrendingNotificationSettingsChanged

// Module 14228 (onServerTrendingNotificationSettingsChanged)
let closure_3 = require(dependencyMap[0]).NotificationSettingsUpdateType;
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/notifications/server_trending/ServerTrendingNotificationUtils.tsx");

export const onServerTrendingNotificationSettingsChanged = function onServerTrendingNotificationSettingsChanged(server_trending_notifications) {
  const EnableServerTrendingNotifications = require(dependencyMap[2]).EnableServerTrendingNotifications;
  EnableServerTrendingNotifications.updateSetting(server_trending_notifications);
  let obj = importDefault(dependencyMap[3]);
  obj = { update_type: constants.ACCOUNT, server_trending_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
