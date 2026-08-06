// Module ID: 14595
// Function ID: 14596
// Name: onGoLiveNotificationSettingsChanged
// Dependencies: [676, 3924, 3957, 698, 2]
// Exports: onGoLiveNotificationSettingsChanged

// Module 14595 (onGoLiveNotificationSettingsChanged)
import { AnalyticEvents } from "ME";
import { NotificationSettingsUpdateType as closure_4 } from "AccountNotificationFlags";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/go_live/GoLiveNotificationUtils.tsx");

export const onGoLiveNotificationSettingsChanged = function onGoLiveNotificationSettingsChanged(go_live_notifications) {
  const StreamNotificationsEnabled = require(3957) /* explicitContentFromProto */.StreamNotificationsEnabled;
  StreamNotificationsEnabled.updateSetting(go_live_notifications);
  let obj = importDefault(698);
  obj = { update_type: constants.ACCOUNT, go_live_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
