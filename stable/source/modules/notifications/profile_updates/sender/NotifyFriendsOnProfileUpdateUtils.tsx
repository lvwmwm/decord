// Module ID: 16005
// Function ID: 16006
// Name: NotifyFriendsOnProfileUpdateUtils
// Dependencies: [4288, 1074, 1935, 1240, 2]
// Exports: onNotifyFriendsOnProfileUpdateSettingsChanged

// Module 16005 (NotifyFriendsOnProfileUpdateUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import UserSettings from "UserSettings" /* 1935 */;
import NotificationConstants from "NotificationConstants" /* 4288 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx");

export const onNotifyFriendsOnProfileUpdateSettingsChanged = function onNotifyFriendsOnProfileUpdateSettingsChanged(notify_friends_on_profile_update) {
  const NotifyFriendsOnProfileUpdate = UserSettings.NotifyFriendsOnProfileUpdate;
  NotifyFriendsOnProfileUpdate.updateSetting(notify_friends_on_profile_update);
  AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants.ACCOUNT, notify_friends_on_profile_update });
};
