// Module ID: 17436
// Function ID: 17437
// Name: SummaryReminderNotificationSetting
// Dependencies: [8424, 17437, 11505, 1114, 4834, 17438, 2]

// Module 17436 (SummaryReminderNotificationSetting)
import intl2 from "intl" /* 1114 */;
import UserSettings from "UserSettings" /* 4834 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SummaryReminderNotificationExperiment from "SummaryReminderNotificationExperiment" /* 17437 */;
import SummaryReminderNotificationUtils from "SummaryReminderNotificationUtils" /* 17438 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
