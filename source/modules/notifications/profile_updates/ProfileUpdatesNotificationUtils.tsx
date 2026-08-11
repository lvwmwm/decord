// Module ID: 14704
// Function ID: 14705
// Name: onProfileUpdatesNotificationSettingsChanged
// Dependencies: [3960, 676, 3993, 698, 2]
// Exports: onProfileUpdatesNotificationSettingsChanged

// Module 14704 (onProfileUpdatesNotificationSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/profile_updates/ProfileUpdatesNotificationUtils.tsx");

export const onProfileUpdatesNotificationSettingsChanged = function onProfileUpdatesNotificationSettingsChanged(profile_updates_notifications) {
  const EnableProfileUpdatesNotifications = require(3993) /* explicitContentFromProto */.EnableProfileUpdatesNotifications;
  EnableProfileUpdatesNotifications.updateSetting(profile_updates_notifications);
  let obj = importDefault(698);
  obj = { update_type: constants.ACCOUNT, profile_updates_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
