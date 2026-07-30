// Module ID: 14466
// Function ID: 14467
// Name: onServerTrendingNotificationSettingsChanged
// Dependencies: [3829, 676, 3862, 698, 2]
// Exports: onServerTrendingNotificationSettingsChanged

// Module 14466 (onServerTrendingNotificationSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/server_trending/ServerTrendingNotificationUtils.tsx");

export const onServerTrendingNotificationSettingsChanged = function onServerTrendingNotificationSettingsChanged(server_trending_notifications) {
  const EnableServerTrendingNotifications = require(3862) /* explicitContentFromProto */.EnableServerTrendingNotifications;
  EnableServerTrendingNotifications.updateSetting(server_trending_notifications);
  let obj = importDefault(698);
  obj = { update_type: constants.ACCOUNT, server_trending_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
