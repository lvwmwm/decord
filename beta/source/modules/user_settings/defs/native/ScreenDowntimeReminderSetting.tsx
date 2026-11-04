// Module ID: 17512
// Function ID: 17513
// Name: ScreenDowntimeReminderSetting
// Dependencies: [11011, 8432, 16815, 8369, 11540, 1113, 504, 17513, 2]

// Module 17512 (ScreenDowntimeReminderSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import useUserLinks from "useUserLinks" /* 8369 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 16815 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 17513 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 11011 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
