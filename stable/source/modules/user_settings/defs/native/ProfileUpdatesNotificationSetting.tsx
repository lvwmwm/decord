// Module ID: 15593
// Function ID: 15594
// Name: ProfileUpdatesNotificationSetting
// Dependencies: [8079, 11605, 1114, 1935, 15594, 2]

// Module 15593 (ProfileUpdatesNotificationSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import ProfileUpdatesNotificationUtils from "ProfileUpdatesNotificationUtils" /* 15594 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
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
