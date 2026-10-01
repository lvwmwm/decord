// Module ID: 15051
// Function ID: 15052
// Name: FriendAnniversaryNotificationSetting
// Dependencies: [7417, 11006, 1115, 2021, 15052, 7524, 2]

// Module 15051 (FriendAnniversaryNotificationSetting)
import intl2 from "intl" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import MobileFriendAnniversaryExperimentDefault from "MobileFriendAnniversaryExperiment" /* 7524 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 15052 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
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
  onValueChange: FriendAnniversaryNotificationUtils.onFriendAnniversaryNotificationSettingsChanged,
  usePredicate() {
    const obj = MobileFriendAnniversaryExperimentDefault;
    return obj.useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
