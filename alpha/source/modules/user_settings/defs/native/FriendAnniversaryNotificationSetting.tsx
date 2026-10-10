// Module ID: 15776
// Function ID: 15777
// Name: FriendAnniversaryNotificationSetting
// Dependencies: [7992, 10663, 1126, 2041, 15777, 2]

// Module 15776 (FriendAnniversaryNotificationSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 15777 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
