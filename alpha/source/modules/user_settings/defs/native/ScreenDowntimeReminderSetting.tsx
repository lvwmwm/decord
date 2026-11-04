// Module ID: 17763
// Function ID: 17764
// Name: ScreenDowntimeReminderSetting
// Dependencies: [11192, 8573, 17062, 8510, 11729, 1113, 504, 17764, 2]

// Module 17763 (ScreenDowntimeReminderSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import useUserLinks from "useUserLinks" /* 8510 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 17062 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 17764 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 11192 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
