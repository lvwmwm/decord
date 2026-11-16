// Module ID: 17872
// Function ID: 17873
// Name: SummaryReminderNotificationSetting
// Dependencies: [8536, 17873, 11717, 1113, 4995, 17874, 2]

// Module 17872 (SummaryReminderNotificationSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4995 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import SummaryReminderNotificationExperiment from "SummaryReminderNotificationExperiment" /* 17873 */;
import SummaryReminderNotificationUtils from "SummaryReminderNotificationUtils" /* 17874 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
