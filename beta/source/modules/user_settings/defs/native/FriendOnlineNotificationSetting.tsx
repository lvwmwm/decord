// Module ID: 15777
// Function ID: 15778
// Name: FriendOnlineNotificationSetting
// Dependencies: [8270, 11630, 1119, 2023, 15778, 2]

// Module 15777 (FriendOnlineNotificationSetting)
import util from "util" /* 1119 */;
import UserSettings from "UserSettings" /* 2023 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15778 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["uvIi/4"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.E6O06k);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableFriendOnlineNotifications.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onFriendOnlineNotificationSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendOnlineNotificationSetting.tsx");

export default toggle;
