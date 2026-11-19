// Module ID: 16990
// Function ID: 16991
// Name: SummaryReminderNotificationSetting
// Dependencies: [8593, 16991, 11875, 1113, 4617, 16992, 2]

// Module 16990 (SummaryReminderNotificationSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4617 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import SummaryReminderNotificationExperiment from "SummaryReminderNotificationExperiment" /* 16991 */;
import SummaryReminderNotificationUtils from "SummaryReminderNotificationUtils" /* 16992 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
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
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SummaryReminderNotificationSetting.tsx");

export default toggle;
