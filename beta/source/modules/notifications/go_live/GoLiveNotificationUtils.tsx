// Module ID: 17355
// Function ID: 17356
// Name: go_live/GoLiveNotificationUtils
// Dependencies: [4948, 1087, 4831, 1267, 2]
// Exports: onNotifyServerMembersOnGoLiveSettingsChanged

// Module 17355 (go_live/GoLiveNotificationUtils)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import UserSettings from "UserSettings" /* 4831 */;
import NotificationConstants from "NotificationConstants" /* 4948 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/go_live/GoLiveNotificationUtils.tsx");

export const onNotifyServerMembersOnGoLiveSettingsChanged = function onNotifyServerMembersOnGoLiveSettingsChanged(notify_server_members_on_go_live) {
  const NotifyServerMembersOnGoLive = UserSettings.NotifyServerMembersOnGoLive;
  NotifyServerMembersOnGoLive.updateSetting(notify_server_members_on_go_live);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, notify_server_members_on_go_live };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
};
