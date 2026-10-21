// Module ID: 16686
// Function ID: 16687
// Name: FriendAnniversaryNotificationSetting
// Dependencies: [8308, 11155, 1128, 4797, 16687, 2]

// Module 16686 (FriendAnniversaryNotificationSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 4797 */;
import SettingsConstants from "SettingsConstants" /* 8308 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 16687 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
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
