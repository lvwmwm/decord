// Module ID: 16165
// Function ID: 16166
// Name: SummaryReminderNotificationSetting
// Dependencies: [8000, 558, 16166, 10767, 1126, 2041, 16167, 2]

// Module 16165 (SummaryReminderNotificationSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 8000 */;
import SummaryReminderNotificationExperiment from "SummaryReminderNotificationExperiment" /* 16166 */;
import SummaryReminderNotificationUtils from "SummaryReminderNotificationUtils" /* 16167 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.xEqC6q);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.KmVXll);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableSummaryReminderNotifications.useSetting,
  onValueChange: SummaryReminderNotificationUtils.onSummaryReminderNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    const obj = SummaryReminderNotificationExperiment;
    return obj.useSummaryReminderNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/SummaryReminderNotificationSetting.tsx");

export default toggle;
