// Module ID: 16928
// Function ID: 16929
// Name: HighlightNotificationsSetting
// Dependencies: [4784, 8712, 1071, 504, 11942, 1112, 16929, 16908, 2]
// Exports: useHighlightNotifications

// Module 16928 (HighlightNotificationsSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16908 */;
import GuildStore from "GuildStore" /* 4784 */;
import SettingBuilders_mod from "SettingBuilders" /* 11942 */;
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
const obj2 = { parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS };
const merged = Object.assign(route);
const route1 = createRoute(obj2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default route;
export { useHighlightNotifications };
export const RedesignHighlightNotificationsSetting = route1;
