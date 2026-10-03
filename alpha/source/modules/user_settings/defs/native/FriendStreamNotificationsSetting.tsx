// Module ID: 15318
// Function ID: 15319
// Name: FriendStreamNotificationsSetting
// Dependencies: [7634, 11129, 1126, 2028, 15319, 2]

// Module 15318 (FriendStreamNotificationsSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import GoLiveNotificationUtils from "GoLiveNotificationUtils" /* 15319 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
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
