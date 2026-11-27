// Module ID: 17133
// Function ID: 17134
// Name: ScreenDowntimeScheduleSetting
// Dependencies: [9556, 16426, 8212, 11970, 1112, 4868, 17109, 2]

// Module 17133 (ScreenDowntimeScheduleSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4868 */;
import useUserLinks from "useUserLinks" /* 8212 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 16426 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17109 */;
import SettingBuilders_mod from "SettingBuilders" /* 11970 */;
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
