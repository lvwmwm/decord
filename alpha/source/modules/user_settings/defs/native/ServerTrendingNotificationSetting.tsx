// Module ID: 17783
// Function ID: 17784
// Name: ServerTrendingNotificationSetting
// Dependencies: [8578, 11737, 1113, 4968, 17784, 2]

// Module 17783 (ServerTrendingNotificationSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4968 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import ServerTrendingNotificationUtils from "ServerTrendingNotificationUtils" /* 17784 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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
