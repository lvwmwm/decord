// Module ID: 16621
// Function ID: 16622
// Name: UpcomingServerEventNotificationSetting
// Dependencies: [8280, 558, 16622, 11111, 1128, 4776, 16623, 2]

// Module 16621 (UpcomingServerEventNotificationSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 4776 */;
import SettingsConstants from "SettingsConstants" /* 8280 */;
import UpcomingServerEventExperiment from "UpcomingServerEventExperiment" /* 16622 */;
import UpcomingServerEventNotificationUtils from "UpcomingServerEventNotificationUtils" /* 16623 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
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
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx");

export default toggle;
