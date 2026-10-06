// Module ID: 15037
// Function ID: 15038
// Name: FriendStreamNotificationsSetting
// Dependencies: [7421, 10874, 1127, 2027, 15038, 2]

// Module 15037 (FriendStreamNotificationsSetting)
import intl2 from "intl" /* 1127 */;
import UserSettings from "UserSettings" /* 2027 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import GoLiveNotificationUtils from "GoLiveNotificationUtils" /* 15038 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.FEFn90);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.StreamNotificationsEnabled.useSetting,
  onValueChange: GoLiveNotificationUtils.onGoLiveNotificationSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendStreamNotificationsSetting.tsx");

export default toggle;
