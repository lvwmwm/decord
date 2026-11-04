// Module ID: 16901
// Function ID: 16902
// Name: ServerTrendingNotificationSetting
// Dependencies: [8364, 11240, 1128, 4831, 16902, 2]

// Module 16901 (ServerTrendingNotificationSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 4831 */;
import SettingsConstants from "SettingsConstants" /* 8364 */;
import ServerTrendingNotificationUtils from "ServerTrendingNotificationUtils" /* 16902 */;
import SettingBuilders from "SettingBuilders" /* 11240 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Q3VWjI);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Wc1RcU);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableServerTrendingNotifications.useSetting,
  onValueChange: ServerTrendingNotificationUtils.onServerTrendingNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ServerTrendingNotificationSetting.tsx");

export default toggle;
