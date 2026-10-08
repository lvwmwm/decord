// Module ID: 15618
// Function ID: 15619
// Name: ScreenDowntimeReminderSetting
// Dependencies: [12577, 7966, 558, 14996, 7711, 11262, 1126, 504, 15619, 2]

// Module 15618 (ScreenDowntimeReminderSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1126 */;
import useUserLinks from "useUserLinks" /* 7711 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 14996 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 15619 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12577 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePredicate() {
  let hasActiveParentLinks = useUserIsTeenAgeGroupDefault();
  const obj = useUserLinks;
  if (hasActiveParentLinks) {
    hasActiveParentLinks = obj.useHasActiveParentLinks();
  }
  return hasActiveParentLinks;
}) : (function usePredicate() {
  let hasActiveParentLinks = useUserIsTeenAgeGroupDefault();
  const obj = useUserLinks;
  if (hasActiveParentLinks) {
    hasActiveParentLinks = obj.useHasActiveParentLinks();
  }
  return hasActiveParentLinks;
});
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
  usePredicate: tmp2
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default toggle;
