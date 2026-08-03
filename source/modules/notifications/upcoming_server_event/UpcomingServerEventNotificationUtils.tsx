// Module ID: 14559
// Function ID: 14560
// Name: onUpcomingServerEventNotificationSettingsChanged
// Dependencies: [3895, 676, 3928, 698, 2]
// Exports: onUpcomingServerEventNotificationSettingsChanged

// Module 14559 (onUpcomingServerEventNotificationSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/upcoming_server_event/UpcomingServerEventNotificationUtils.tsx");

export const onUpcomingServerEventNotificationSettingsChanged = function onUpcomingServerEventNotificationSettingsChanged(upcoming_server_event_notifications) {
  const EnableUpcomingServerEventNotifications = require(3928) /* explicitContentFromProto */.EnableUpcomingServerEventNotifications;
  EnableUpcomingServerEventNotifications.updateSetting(upcoming_server_event_notifications);
  let obj = importDefault(698);
  obj = { update_type: constants.ACCOUNT, upcoming_server_event_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
