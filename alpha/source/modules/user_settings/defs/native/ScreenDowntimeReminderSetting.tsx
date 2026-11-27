// Module ID: 17134
// Function ID: 17135
// Name: ScreenDowntimeReminderSetting
// Dependencies: [10600, 9556, 16426, 8212, 11970, 1112, 504, 17135, 17109, 2]

// Module 17134 (ScreenDowntimeReminderSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import useUserLinks from "useUserLinks" /* 8212 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 16426 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17109 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 17135 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 10600 */;
import SettingBuilders_mod from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.z6tZKH);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.TummoQ);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue() {
    const items = [NotificationSettingsStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => NotificationSettingsStore.screenDowntimeReminder);
  },
  onValueChange(screen_downtime_reminder) {
    const obj = NotificationActionCreatorsDefault;
    return obj.setScreenDowntimeReminder(screen_downtime_reminder);
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
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default toggle;
export const RedesignScreenDowntimeReminderSetting = toggle1;
