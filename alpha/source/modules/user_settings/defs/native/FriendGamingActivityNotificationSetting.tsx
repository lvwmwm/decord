// Module ID: 16826
// Function ID: 16827
// Name: FriendGamingActivityNotificationSetting
// Dependencies: [8330, 11204, 1128, 4797, 16827, 2]

// Module 16826 (FriendGamingActivityNotificationSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 4797 */;
import SettingsConstants from "SettingsConstants" /* 8330 */;
import FriendGamingActivityNotificationUtils from "FriendGamingActivityNotificationUtils" /* 16827 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
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
