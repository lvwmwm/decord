// Module ID: 17777
// Function ID: 17778
// Name: FriendOnlineNotificationSetting
// Dependencies: [8578, 11737, 1113, 4968, 17778, 2]

// Module 17777 (FriendOnlineNotificationSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4968 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 17778 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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
