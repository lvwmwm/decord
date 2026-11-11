// Module ID: 18035
// Function ID: 18036
// Name: ScreenDowntimeScheduleSetting
// Dependencies: [9136, 17324, 9550, 12317, 1113, 5068, 2]

// Module 18035 (ScreenDowntimeScheduleSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 5068 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import useUserLinks from "useUserLinks" /* 9550 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 17324 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
