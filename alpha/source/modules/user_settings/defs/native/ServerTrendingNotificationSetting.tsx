// Module ID: 16695
// Function ID: 16696
// Name: ServerTrendingNotificationSetting
// Dependencies: [8308, 11155, 1128, 4797, 16696, 2]

// Module 16695 (ServerTrendingNotificationSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 4797 */;
import SettingsConstants from "SettingsConstants" /* 8308 */;
import ServerTrendingNotificationUtils from "ServerTrendingNotificationUtils" /* 16696 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
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
