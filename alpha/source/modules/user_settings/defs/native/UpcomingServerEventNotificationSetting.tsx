// Module ID: 16911
// Function ID: 16912
// Name: UpcomingServerEventNotificationSetting
// Dependencies: [8331, 558, 16912, 11212, 1125, 4800, 16913, 2]

// Module 16911 (UpcomingServerEventNotificationSetting)
import intl2 from "intl" /* 1125 */;
import UserSettings from "UserSettings" /* 4800 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import UpcomingServerEventExperiment from "UpcomingServerEventExperiment" /* 16912 */;
import UpcomingServerEventNotificationUtils from "UpcomingServerEventNotificationUtils" /* 16913 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
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
