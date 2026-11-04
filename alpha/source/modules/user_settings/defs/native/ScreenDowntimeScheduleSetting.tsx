// Module ID: 17765
// Function ID: 17766
// Name: ScreenDowntimeScheduleSetting
// Dependencies: [8573, 17062, 8510, 11729, 1113, 4966, 2]

// Module 17765 (ScreenDowntimeScheduleSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4966 */;
import useUserLinks from "useUserLinks" /* 8510 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 17062 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.dxlHN2);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["/071J7"]);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableScreenDowntimeScheduleNotifications.useSetting,
  onValueChange(arg0) {
    const EnableScreenDowntimeScheduleNotifications = UserSettings.EnableScreenDowntimeScheduleNotifications;
    return EnableScreenDowntimeScheduleNotifications.updateSetting(arg0);
  },
  usePredicate() {
    let hasActiveParentLinks = useUserIsTeenAgeGroupDefault();
    const obj = useUserLinks;
    if (hasActiveParentLinks) {
      hasActiveParentLinks = obj.useHasActiveParentLinks();
    }
    return hasActiveParentLinks;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeScheduleSetting.tsx");

export default toggle;
