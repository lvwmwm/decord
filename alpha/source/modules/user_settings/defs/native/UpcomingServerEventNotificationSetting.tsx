// Module ID: 17745
// Function ID: 17746
// Name: UpcomingServerEventNotificationSetting
// Dependencies: [8573, 17746, 11728, 1113, 4966, 17747, 2]

// Module 17745 (UpcomingServerEventNotificationSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4966 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import UpcomingServerEventExperiment from "UpcomingServerEventExperiment" /* 17746 */;
import UpcomingServerEventNotificationUtils from "UpcomingServerEventNotificationUtils" /* 17747 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
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
