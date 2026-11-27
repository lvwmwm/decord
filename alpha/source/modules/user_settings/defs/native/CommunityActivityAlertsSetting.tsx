// Module ID: 17127
// Function ID: 17128
// Name: CommunityActivityAlertsSetting
// Dependencies: [10596, 9556, 1071, 504, 1112, 11970, 17128, 3207, 17109, 2]

// Module 17127 (CommunityActivityAlertsSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef3207 from "module_3207" /* 3207 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17109 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10596 */;
import SettingBuilders_mod from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.D9yVAH);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useDescription: function useCommunityActivityAlertsSettingDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["0PhAOH"]);
  },
  usePredicate: function useHasCommunityActivityAlertsSetting() {
    let guildAlertSettings;
    const items = [GuildIncidentsStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0);
  },
  screen: {
    route: UserSettingsSections.COMMUNITY_ALERTS,
    getComponent() {
      return require("UserSettingsCommunityNotifications").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
SettingBuilders = SettingBuilders_mod;
const createRoute = SettingBuilders.createRoute;
const obj2 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3207.GI8o2C);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3207["5g09KR"]);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS
};
const merged = Object.assign(route);
const route1 = createRoute(obj2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx");

export default route;
export const RedesignCommunityActivityAlertsSetting = route1;
