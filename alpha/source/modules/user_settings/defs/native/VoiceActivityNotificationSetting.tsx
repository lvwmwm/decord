// Module ID: 15716
// Function ID: 15717
// Name: VoiceActivityNotificationSetting
// Dependencies: [7974, 1085, 4722, 10629, 1126, 2041, 1265, 2]

// Module 15716 (VoiceActivityNotificationSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import UserSettings from "UserSettings" /* 2041 */;
import NotificationConstants from "NotificationConstants" /* 4722 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const AnalyticEvents = Constants.AnalyticEvents;
const constants = NotificationConstants.NotificationSettingsUpdateType;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.wtk08S);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableVoiceActivityNotifications.useSetting,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.rngMNx);
  },
  onValueChange(voice_activity_notifications) {
    const EnableVoiceActivityNotifications = UserSettings.EnableVoiceActivityNotifications;
    EnableVoiceActivityNotifications.updateSetting(voice_activity_notifications);
    const obj = AnalyticsUtilsDefault;
    const obj2 = { update_type: constants.ACCOUNT, voice_activity_notifications };
    obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/VoiceActivityNotificationSetting.tsx");

export default toggle;
