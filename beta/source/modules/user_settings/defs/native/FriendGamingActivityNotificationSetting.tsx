// Module ID: 16567
// Function ID: 16568
// Name: FriendGamingActivityNotificationSetting
// Dependencies: [8260, 11084, 1128, 2044, 16568, 2]

// Module 16567 (FriendGamingActivityNotificationSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import FriendGamingActivityNotificationUtils from "FriendGamingActivityNotificationUtils" /* 16568 */;
import SettingBuilders from "SettingBuilders" /* 11084 */;
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
