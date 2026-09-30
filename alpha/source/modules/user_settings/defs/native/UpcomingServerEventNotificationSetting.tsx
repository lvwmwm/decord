// Module ID: 15270
// Function ID: 15271
// Name: UpcomingServerEventNotificationSetting
// Dependencies: [7612, 15271, 11211, 1115, 2021, 15272, 2]

// Module 15270 (UpcomingServerEventNotificationSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import UpcomingServerEventExperiment from "UpcomingServerEventExperiment" /* 15271 */;
import UpcomingServerEventNotificationUtils from "UpcomingServerEventNotificationUtils" /* 15272 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
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
