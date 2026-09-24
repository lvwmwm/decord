// Module ID: 15866
// Function ID: 15867
// Name: UpcomingServerEventNotificationSetting
// Dependencies: [8323, 15867, 11811, 1115, 2020, 15868, 2]

// Module 15866 (UpcomingServerEventNotificationSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import SettingsConstants from "SettingsConstants" /* 8323 */;
import UpcomingServerEventExperiment from "UpcomingServerEventExperiment" /* 15867 */;
import UpcomingServerEventNotificationUtils from "UpcomingServerEventNotificationUtils" /* 15868 */;
import SettingBuilders from "SettingBuilders" /* 11811 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MCVmjA);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.R0VpSW);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: UpcomingServerEventNotificationUtils.onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return UpcomingServerEventExperiment.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx");

export default toggle;
