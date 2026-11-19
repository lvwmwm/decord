// Module ID: 16973
// Function ID: 16974
// Name: ScreenDowntimeScheduleSetting
// Dependencies: [8593, 16127, 9016, 11875, 1113, 4617, 16949, 2]

// Module 16973 (ScreenDowntimeScheduleSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4617 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import useUserLinks from "useUserLinks" /* 9016 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 16127 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16949 */;
import SettingBuilders_mod from "SettingBuilders" /* 11875 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let SettingBuilders = SettingBuilders_mod;
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
SettingBuilders = SettingBuilders_mod;
const createToggle = SettingBuilders.createToggle;
const obj2 = { parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY };
const merged = Object.assign(toggle);
const toggle1 = createToggle(obj2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeScheduleSetting.tsx");

export default toggle;
export const RedesignScreenDowntimeScheduleSetting = toggle1;
