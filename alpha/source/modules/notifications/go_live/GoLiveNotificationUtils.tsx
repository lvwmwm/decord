// Module ID: 16236
// Function ID: 16237
// Name: go_live/GoLiveNotificationUtils
// Dependencies: [4722, 1085, 2041, 1265, 2]
// Exports: onNotifyServerMembersOnGoLiveSettingsChanged

// Module 16236 (go_live/GoLiveNotificationUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import UserSettings from "UserSettings" /* 2041 */;
import NotificationConstants from "NotificationConstants" /* 4722 */;
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
