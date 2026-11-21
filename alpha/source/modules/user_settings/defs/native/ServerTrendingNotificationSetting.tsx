// Module ID: 16932
// Function ID: 16933
// Name: ServerTrendingNotificationSetting
// Dependencies: [8712, 11937, 1112, 4738, 16933, 2]

// Module 16932 (ServerTrendingNotificationSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import ServerTrendingNotificationUtils from "ServerTrendingNotificationUtils" /* 16933 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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
