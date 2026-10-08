// Module ID: 15591
// Function ID: 15592
// Name: CustomStatusNotificationSettings
// Dependencies: [7966, 1085, 4720, 2040, 1209, 1264, 558, 11262, 1126, 2]
// Exports: onChange

// Module 15591 (CustomStatusNotificationSettings)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1209 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import UserSettings from "UserSettings" /* 2040 */;
import NotificationConstants from "NotificationConstants" /* 4720 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

function onChange(custom_status_push_notifications) {
  const CustomStatusPushNotifications = UserSettings.CustomStatusPushNotifications;
  const updateSetting = CustomStatusPushNotifications.updateSetting;
  const CustomStatusPushNotificationType = preloaded_user_settings.CustomStatusPushNotificationType;
  updateSetting(custom_status_push_notifications ? CustomStatusPushNotificationType.STATUS_PUSH_ENABLED : CustomStatusPushNotificationType.STATUS_PUSH_DISABLED);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, custom_status_push_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const AnalyticEvents = Constants.AnalyticEvents;
const constants = NotificationConstants.NotificationSettingsUpdateType;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.PTtxi9);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["/+OQEs"]);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue() {
    const CustomStatusPushNotifications = UserSettings.CustomStatusPushNotifications;
    const setting = CustomStatusPushNotifications.useSetting();
    return setting !== preloaded_user_settings.CustomStatusPushNotificationType.STATUS_PUSH_DISABLED;
  },
  onValueChange: onChange
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/CustomStatusNotificationSettings.tsx");

export default toggle;
export { onChange };
