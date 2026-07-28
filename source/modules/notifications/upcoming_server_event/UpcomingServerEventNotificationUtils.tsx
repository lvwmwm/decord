// Module ID: 14451
// Function ID: 110353
// Name: onUpcomingServerEventNotificationSettingsChanged
// Dependencies: [3805, 653, 3838, 675, 2]
// Exports: onUpcomingServerEventNotificationSettingsChanged

// Module 14451 (onUpcomingServerEventNotificationSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/upcoming_server_event/UpcomingServerEventNotificationUtils.tsx");

export const onUpcomingServerEventNotificationSettingsChanged = function onUpcomingServerEventNotificationSettingsChanged(upcoming_server_event_notifications) {
  const EnableUpcomingServerEventNotifications = require(3838) /* explicitContentFromProto */.EnableUpcomingServerEventNotifications;
  EnableUpcomingServerEventNotifications.updateSetting(upcoming_server_event_notifications);
  let obj = importDefault(675);
  obj = { update_type: constants.ACCOUNT, upcoming_server_event_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
