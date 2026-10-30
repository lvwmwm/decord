// Module ID: 17433
// Function ID: 17434
// Name: UpcomingServerEventNotificationSetting
// Dependencies: [8424, 17434, 11505, 1114, 4834, 17435, 2]

// Module 17433 (UpcomingServerEventNotificationSetting)
import intl2 from "intl" /* 1114 */;
import UserSettings from "UserSettings" /* 4834 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import UpcomingServerEventExperiment from "UpcomingServerEventExperiment" /* 17434 */;
import UpcomingServerEventNotificationUtils from "UpcomingServerEventNotificationUtils" /* 17435 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.MCVmjA);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.R0VpSW);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: UpcomingServerEventNotificationUtils.onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    const obj = UpcomingServerEventExperiment;
    return obj.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx");

export default toggle;
