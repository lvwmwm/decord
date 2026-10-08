// Module ID: 15621
// Function ID: 15622
// Name: CommunityActivityAlertsSetting
// Dependencies: [11293, 7966, 1085, 558, 576, 504, 1126, 11262, 15622, 2]

// Module 15621 (CommunityActivityAlertsSetting)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 11293 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasCommunityActivityAlertsSetting() {
  let guildAlertSettings;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildIncidentsStore];
    const fn = function s() {
      return Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useHasCommunityActivityAlertsSetting() {
  let guildAlertSettings;
  const items = [GuildIncidentsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0);
});
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
  usePredicate: tmp2,
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
