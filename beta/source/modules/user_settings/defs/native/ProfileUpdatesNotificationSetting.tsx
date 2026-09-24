// Module ID: 15781
// Function ID: 15782
// Name: ProfileUpdatesNotificationSetting
// Dependencies: [8270, 11630, 1119, 2023, 15782, 2]

// Module 15781 (ProfileUpdatesNotificationSetting)
import util from "util" /* 1119 */;
import UserSettings from "UserSettings" /* 2023 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import ProfileUpdatesNotificationUtils from "ProfileUpdatesNotificationUtils" /* 15782 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.VxBO2F);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.F4VeBe);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableProfileUpdatesNotifications.useSetting,
  onValueChange: ProfileUpdatesNotificationUtils.onProfileUpdatesNotificationSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ProfileUpdatesNotificationSetting.tsx");

export default toggle;
