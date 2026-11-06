// Module ID: 18229
// Function ID: 18230
// Name: go_live/GoLiveNotificationUtils
// Dependencies: [5115, 1072, 4995, 1252, 2]
// Exports: onNotifyServerMembersOnGoLiveSettingsChanged

// Module 18229 (go_live/GoLiveNotificationUtils)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserSettings from "UserSettings" /* 4995 */;
import NotificationConstants from "NotificationConstants" /* 5115 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/go_live/GoLiveNotificationUtils.tsx");

export function onNotifyServerMembersOnGoLiveSettingsChanged(notify_server_members_on_go_live) {
  const NotifyServerMembersOnGoLive = UserSettings.NotifyServerMembersOnGoLive;
  NotifyServerMembersOnGoLive.updateSetting(notify_server_members_on_go_live);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, notify_server_members_on_go_live };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
}
