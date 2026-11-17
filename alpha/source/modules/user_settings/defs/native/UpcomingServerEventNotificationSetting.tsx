// Module ID: 18192
// Function ID: 18193
// Name: UpcomingServerEventNotificationSetting
// Dependencies: [9213, 18193, 12612, 1113, 5135, 18194, 2]

// Module 18192 (UpcomingServerEventNotificationSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 5135 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import UpcomingServerEventExperiment from "UpcomingServerEventExperiment" /* 18193 */;
import UpcomingServerEventNotificationUtils from "UpcomingServerEventNotificationUtils" /* 18194 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
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
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx");

export default toggle;
