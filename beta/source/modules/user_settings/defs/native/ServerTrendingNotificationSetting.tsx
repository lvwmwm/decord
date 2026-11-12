// Module ID: 17870
// Function ID: 17871
// Name: ServerTrendingNotificationSetting
// Dependencies: [8536, 11717, 1113, 4995, 17871, 2]

// Module 17870 (ServerTrendingNotificationSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4995 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import ServerTrendingNotificationUtils from "ServerTrendingNotificationUtils" /* 17871 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
