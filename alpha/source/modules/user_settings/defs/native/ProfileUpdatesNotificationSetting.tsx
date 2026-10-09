// Module ID: 15721
// Function ID: 15722
// Name: ProfileUpdatesNotificationSetting
// Dependencies: [7974, 10629, 1126, 2041, 15722, 2]

// Module 15721 (ProfileUpdatesNotificationSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import ProfileUpdatesNotificationUtils from "ProfileUpdatesNotificationUtils" /* 15722 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
