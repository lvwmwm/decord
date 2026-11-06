// Module ID: 17780
// Function ID: 17781
// Name: ScreenDowntimeReminderSetting
// Dependencies: [11155, 8524, 17074, 8461, 11703, 1113, 504, 17781, 2]

// Module 17780 (ScreenDowntimeReminderSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import useUserLinks from "useUserLinks" /* 8461 */;
import SettingsConstants from "SettingsConstants" /* 8524 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 17074 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 17781 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 11155 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
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
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default toggle;
