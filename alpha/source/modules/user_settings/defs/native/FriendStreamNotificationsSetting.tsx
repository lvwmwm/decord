// Module ID: 15599
// Function ID: 15600
// Name: FriendStreamNotificationsSetting
// Dependencies: [7966, 11262, 1126, 2040, 15600, 2]

// Module 15599 (FriendStreamNotificationsSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import GoLiveNotificationUtils from "GoLiveNotificationUtils" /* 15600 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
