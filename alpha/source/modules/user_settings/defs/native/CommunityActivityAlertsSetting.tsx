// Module ID: 16967
// Function ID: 16968
// Name: CommunityActivityAlertsSetting
// Dependencies: [11039, 8593, 1072, 504, 1113, 11875, 16968, 16949, 2]

// Module 16967 (CommunityActivityAlertsSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16949 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 11039 */;
import SettingBuilders_mod from "SettingBuilders" /* 11875 */;
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
const obj2 = { parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS };
const merged = Object.assign(route);
const route1 = createRoute(obj2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx");

export default route;
export const RedesignCommunityActivityAlertsSetting = route1;
