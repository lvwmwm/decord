// Module ID: 17136
// Function ID: 17137
// Name: ProfileUpdatesNotificationSetting
// Dependencies: [8365, 11248, 1125, 4832, 17137, 2]

// Module 17136 (ProfileUpdatesNotificationSetting)
import intl2 from "intl" /* 1125 */;
import UserSettings from "UserSettings" /* 4832 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import ProfileUpdatesNotificationUtils from "ProfileUpdatesNotificationUtils" /* 17137 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
