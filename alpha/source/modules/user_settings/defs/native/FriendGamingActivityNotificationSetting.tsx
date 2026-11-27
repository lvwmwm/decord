// Module ID: 17141
// Function ID: 17142
// Name: FriendGamingActivityNotificationSetting
// Dependencies: [9556, 11970, 1112, 4868, 17142, 2]

// Module 17141 (FriendGamingActivityNotificationSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import FriendGamingActivityNotificationUtils from "FriendGamingActivityNotificationUtils" /* 17142 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["yq/aPt"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Amy1fz);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableFriendGamingActivityNotifications.useSetting,
  onValueChange: FriendGamingActivityNotificationUtils.onFriendGamingActivityNotificationSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendGamingActivityNotificationSetting.tsx");

export default toggle;
