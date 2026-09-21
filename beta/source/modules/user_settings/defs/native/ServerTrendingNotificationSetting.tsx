// Module ID: 15773
// Function ID: 15774
// Name: ServerTrendingNotificationSetting
// Dependencies: [8238, 11594, 1119, 2023, 15774, 2]

// Module 15773 (ServerTrendingNotificationSetting)
import util from "util" /* 1119 */;
import UserSettings from "UserSettings" /* 2023 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import ServerTrendingNotificationUtils from "ServerTrendingNotificationUtils" /* 15774 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Q3VWjI);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.Wc1RcU);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableServerTrendingNotifications.useSetting,
  onValueChange: ServerTrendingNotificationUtils.onServerTrendingNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ServerTrendingNotificationSetting.tsx");

export default toggle;
