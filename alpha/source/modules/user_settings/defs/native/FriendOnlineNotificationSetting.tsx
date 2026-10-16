// Module ID: 16483
// Function ID: 16484
// Name: FriendOnlineNotificationSetting
// Dependencies: [8213, 11006, 1128, 2044, 16484, 2]

// Module 16483 (FriendOnlineNotificationSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16484 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
