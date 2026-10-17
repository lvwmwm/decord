// Module ID: 16558
// Function ID: 16559
// Name: FriendAnniversaryNotificationSetting
// Dependencies: [8260, 11065, 1128, 2044, 16559, 2]

// Module 16558 (FriendAnniversaryNotificationSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 16559 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.BVO96v);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableFriendAnniversaryNotifications.useSetting,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["00TNo7"]);
  },
  onValueChange: FriendAnniversaryNotificationUtils.onFriendAnniversaryNotificationSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
