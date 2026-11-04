// Module ID: 17737
// Function ID: 17738
// Name: FriendOnlineNotificationSetting
// Dependencies: [8573, 11728, 1113, 4966, 17738, 2]

// Module 17737 (FriendOnlineNotificationSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4966 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 17738 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["uvIi/4"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.E6O06k);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableFriendOnlineNotifications.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onFriendOnlineNotificationSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendOnlineNotificationSetting.tsx");

export default toggle;
