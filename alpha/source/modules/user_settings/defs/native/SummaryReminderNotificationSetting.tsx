// Module ID: 15801
// Function ID: 15802
// Name: SummaryReminderNotificationSetting
// Dependencies: [8237, 11729, 1115, 2020, 15802, 2]

// Module 15801 (SummaryReminderNotificationSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import SettingsConstants from "SettingsConstants" /* 8237 */;
import SummaryReminderNotificationUtils from "SummaryReminderNotificationUtils" /* 15802 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.xEqC6q);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.KmVXll);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableSummaryReminderNotifications.useSetting,
  onValueChange: SummaryReminderNotificationUtils.onSummaryReminderNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SummaryReminderNotificationSetting.tsx");

export default toggle;
