// Module ID: 14392
// Function ID: 110039
// Name: onServerTrendingNotificationSettingsChanged
// Dependencies: [3770, 653, 3803, 675, 2]
// Exports: onServerTrendingNotificationSettingsChanged

// Module 14392 (onServerTrendingNotificationSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/server_trending/ServerTrendingNotificationUtils.tsx");

export const onServerTrendingNotificationSettingsChanged = function onServerTrendingNotificationSettingsChanged(server_trending_notifications) {
  const EnableServerTrendingNotifications = require(3803) /* explicitContentFromProto */.EnableServerTrendingNotifications;
  EnableServerTrendingNotifications.updateSetting(server_trending_notifications);
  let obj = importDefault(675);
  obj = { update_type: constants.ACCOUNT, server_trending_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
