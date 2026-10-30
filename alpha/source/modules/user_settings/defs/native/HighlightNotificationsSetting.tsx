// Module ID: 17444
// Function ID: 17445
// Name: HighlightNotificationsSetting
// Dependencies: [4880, 8424, 1072, 504, 11505, 1114, 17445, 2]
// Exports: useHighlightNotifications

// Module 17444 (HighlightNotificationsSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import GuildStore from "GuildStore" /* 4880 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
const result = size.fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default route;
export { useHighlightNotifications };
