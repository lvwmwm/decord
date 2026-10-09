// Module ID: 15731
// Function ID: 15732
// Name: ScreenDowntimeReminderSetting
// Dependencies: [12517, 7974, 558, 15108, 7720, 10629, 1126, 504, 15732, 2]

// Module 15731 (ScreenDowntimeReminderSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1126 */;
import useUserLinks from "useUserLinks" /* 7720 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 15108 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 15732 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12517 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
