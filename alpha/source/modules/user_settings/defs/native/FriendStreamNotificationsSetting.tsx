// Module ID: 17420
// Function ID: 17421
// Name: FriendStreamNotificationsSetting
// Dependencies: [8424, 11505, 1114, 4834, 17421, 2]

// Module 17420 (FriendStreamNotificationsSetting)
import intl2 from "intl" /* 1114 */;
import UserSettings from "UserSettings" /* 4834 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import GoLiveNotificationUtils from "GoLiveNotificationUtils" /* 17421 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
