// Module ID: 15793
// Function ID: 15794
// Name: ScreenDowntimeReminderSetting
// Dependencies: [12564, 7992, 558, 15167, 7738, 10663, 1126, 504, 15794, 2]

// Module 15793 (ScreenDowntimeReminderSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1126 */;
import useUserLinks from "useUserLinks" /* 7738 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 15167 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 15794 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12564 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
