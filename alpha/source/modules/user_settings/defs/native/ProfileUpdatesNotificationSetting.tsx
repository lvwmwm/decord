// Module ID: 18023
// Function ID: 18024
// Name: ProfileUpdatesNotificationSetting
// Dependencies: [9136, 12317, 1113, 5068, 18024, 2]

// Module 18023 (ProfileUpdatesNotificationSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 5068 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import ProfileUpdatesNotificationUtils from "ProfileUpdatesNotificationUtils" /* 18024 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.VxBO2F);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.F4VeBe);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableProfileUpdatesNotifications.useSetting,
  onValueChange: ProfileUpdatesNotificationUtils.onProfileUpdatesNotificationSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ProfileUpdatesNotificationSetting.tsx");

export default toggle;
