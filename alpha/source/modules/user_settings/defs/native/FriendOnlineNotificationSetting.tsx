// Module ID: 15717
// Function ID: 15718
// Name: FriendOnlineNotificationSetting
// Dependencies: [7974, 10629, 1126, 2041, 15718, 2]

// Module 15717 (FriendOnlineNotificationSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15718 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
