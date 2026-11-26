// Module ID: 17122
// Function ID: 17123
// Name: HighlightNotificationsSetting
// Dependencies: [4914, 9555, 1071, 504, 11962, 1112, 17123, 3207, 17102, 2]
// Exports: useHighlightNotifications

// Module 17122 (HighlightNotificationsSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef3207 from "module_3207" /* 3207 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17102 */;
import GuildStore from "GuildStore" /* 4914 */;
import SettingBuilders_mod from "SettingBuilders" /* 11962 */;
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
    return intl.string(_modDef3207["Sq+zmG"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3207.yHrluZ);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS
};
const merged = Object.assign(route);
const route1 = createRoute(obj2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default route;
export { useHighlightNotifications };
export const RedesignHighlightNotificationsSetting = route1;
