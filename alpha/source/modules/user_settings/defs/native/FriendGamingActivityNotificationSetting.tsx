// Module ID: 17768
// Function ID: 17769
// Name: FriendGamingActivityNotificationSetting
// Dependencies: [8524, 11703, 1113, 4995, 17769, 2]

// Module 17768 (FriendGamingActivityNotificationSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4995 */;
import SettingsConstants from "SettingsConstants" /* 8524 */;
import FriendGamingActivityNotificationUtils from "FriendGamingActivityNotificationUtils" /* 17769 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
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
