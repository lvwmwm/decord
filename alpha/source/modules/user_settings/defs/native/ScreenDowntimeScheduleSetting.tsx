// Module ID: 17441
// Function ID: 17442
// Name: ScreenDowntimeScheduleSetting
// Dependencies: [8424, 16760, 8361, 11505, 1114, 4834, 2]

// Module 17441 (ScreenDowntimeScheduleSetting)
import intl2 from "intl" /* 1114 */;
import UserSettings from "UserSettings" /* 4834 */;
import useUserLinks from "useUserLinks" /* 8361 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 16760 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
