// Module ID: 17422
// Function ID: 17423
// Name: FriendAnniversaryNotificationSetting
// Dependencies: [8424, 11505, 1114, 4834, 17423, 2]

// Module 17422 (FriendAnniversaryNotificationSetting)
import intl2 from "intl" /* 1114 */;
import UserSettings from "UserSettings" /* 4834 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 17423 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
