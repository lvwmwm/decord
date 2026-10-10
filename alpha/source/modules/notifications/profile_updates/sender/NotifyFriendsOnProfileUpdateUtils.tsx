// Module ID: 16301
// Function ID: 16302
// Name: NotifyFriendsOnProfileUpdateUtils
// Dependencies: [4763, 1085, 2041, 1265, 2]
// Exports: onNotifyFriendsOnProfileUpdateSettingsChanged

// Module 16301 (NotifyFriendsOnProfileUpdateUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import UserSettings from "UserSettings" /* 2041 */;
import NotificationConstants from "NotificationConstants" /* 4763 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx");

export const onNotifyFriendsOnProfileUpdateSettingsChanged = function onNotifyFriendsOnProfileUpdateSettingsChanged(notify_friends_on_profile_update) {
  const NotifyFriendsOnProfileUpdate = UserSettings.NotifyFriendsOnProfileUpdate;
  NotifyFriendsOnProfileUpdate.updateSetting(notify_friends_on_profile_update);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, notify_friends_on_profile_update };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
};
