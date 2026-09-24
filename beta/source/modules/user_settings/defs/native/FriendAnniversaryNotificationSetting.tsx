// Module ID: 15774
// Function ID: 15775
// Name: FriendAnniversaryNotificationSetting
// Dependencies: [8270, 11630, 1119, 2023, 15775, 8376, 2]

// Module 15774 (FriendAnniversaryNotificationSetting)
import util from "util" /* 1119 */;
import UserSettings from "UserSettings" /* 2023 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import MobileFriendAnniversaryExperimentDefault from "MobileFriendAnniversaryExperiment" /* 8376 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 15775 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.BVO96v);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableFriendAnniversaryNotifications.useSetting,
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["00TNo7"]);
  },
  onValueChange: FriendAnniversaryNotificationUtils.onFriendAnniversaryNotificationSettingsChanged,
  usePredicate() {
    return MobileFriendAnniversaryExperimentDefault.useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
