// Module ID: 17788
// Function ID: 17789
// Name: SummaryReminderNotificationSetting
// Dependencies: [8578, 17789, 11737, 1113, 4968, 17790, 2]

// Module 17788 (SummaryReminderNotificationSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4968 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import SummaryReminderNotificationExperiment from "SummaryReminderNotificationExperiment" /* 17789 */;
import SummaryReminderNotificationUtils from "SummaryReminderNotificationUtils" /* 17790 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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
