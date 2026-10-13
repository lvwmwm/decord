// Module ID: 16131
// Function ID: 16132
// Name: ScreenDowntimeReminderSetting
// Dependencies: [13076, 7993, 558, 15511, 7739, 10663, 1126, 504, 16132, 2]

// Module 16131 (ScreenDowntimeReminderSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1126 */;
import useUserLinks from "useUserLinks" /* 7739 */;
import SettingsConstants from "SettingsConstants" /* 7993 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 15511 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 16132 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 13076 */;
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
