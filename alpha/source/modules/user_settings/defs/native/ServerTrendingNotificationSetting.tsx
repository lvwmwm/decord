// Module ID: 16966
// Function ID: 16967
// Name: ServerTrendingNotificationSetting
// Dependencies: [9414, 11815, 1112, 4742, 16967, 2]

// Module 16966 (ServerTrendingNotificationSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4742 */;
import SettingsConstants from "SettingsConstants" /* 9414 */;
import ServerTrendingNotificationUtils from "ServerTrendingNotificationUtils" /* 16967 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
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
