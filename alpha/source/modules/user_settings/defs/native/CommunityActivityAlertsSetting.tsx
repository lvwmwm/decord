// Module ID: 17794
// Function ID: 17795
// Name: CommunityActivityAlertsSetting
// Dependencies: [11199, 8578, 1072, 504, 1113, 11737, 17795, 2]

// Module 17794 (CommunityActivityAlertsSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 11199 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
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
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx");

export default route;
