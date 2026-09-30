// Module ID: 15257
// Function ID: 15258
// Name: FriendStreamNotificationsSetting
// Dependencies: [7612, 11211, 1115, 2021, 15258, 2]

// Module 15257 (FriendStreamNotificationsSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import GoLiveNotificationUtils from "GoLiveNotificationUtils" /* 15258 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.FEFn90);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.StreamNotificationsEnabled.useSetting,
  onValueChange: GoLiveNotificationUtils.onGoLiveNotificationSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendStreamNotificationsSetting.tsx");

export default toggle;
