// Module ID: 17877
// Function ID: 17878
// Name: ScreenDowntimeScheduleSetting
// Dependencies: [8536, 17164, 8473, 11717, 1113, 4995, 2]

// Module 17877 (ScreenDowntimeScheduleSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4995 */;
import useUserLinks from "useUserLinks" /* 8473 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 17164 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
