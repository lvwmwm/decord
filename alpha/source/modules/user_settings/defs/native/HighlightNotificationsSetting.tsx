// Module ID: 17071
// Function ID: 17072
// Name: HighlightNotificationsSetting
// Dependencies: [4883, 9513, 1071, 504, 11914, 1112, 17072, 3206, 17051, 2]
// Exports: useHighlightNotifications

// Module 17071 (HighlightNotificationsSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef3206 from "module_3206" /* 3206 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17051 */;
import GuildStore from "GuildStore" /* 4883 */;
import SettingBuilders_mod from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function useHighlightNotifications() {
  let guildCount;
  const items = [GuildStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => guildCount.getGuildCount() > 0);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.o8Bypv);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["Vw/Xn8"]);
  },
  usePredicate: useHighlightNotifications,
  screen: {
    route: UserSettingsSections.HIGHLIGHT_NOTIFICATIONS,
    getComponent() {
      return require("UserSettingsHighlightNotifications").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
SettingBuilders = SettingBuilders_mod;
const createRoute = SettingBuilders.createRoute;
const obj2 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3206["Sq+zmG"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3206.yHrluZ);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS
};
const merged = Object.assign(route);
const route1 = createRoute(obj2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default route;
export { useHighlightNotifications };
export const RedesignHighlightNotificationsSetting = route1;
