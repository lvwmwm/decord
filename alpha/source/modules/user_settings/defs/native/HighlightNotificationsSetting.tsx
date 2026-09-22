// Module ID: 15808
// Function ID: 15809
// Name: HighlightNotificationsSetting
// Dependencies: [2064, 8237, 1074, 504, 11729, 1115, 15809, 2]
// Exports: useHighlightNotifications

// Module 15808 (HighlightNotificationsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import GuildStore from "GuildStore" /* 2064 */;

require = fn;
function useHighlightNotifications() {
  const items = [GuildStore];
  return initialize.useStateFromStores(items, () => guildCount.getGuildCount() > 0);
}
const SettingBuilders = fn(11729);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.o8Bypv);
  },
  parent: fn(8237).MobileUserSettings.NOTIFICATIONS,
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["Vw/Xn8"]);
  },
  usePredicate: useHighlightNotifications,
  screen: {
    route: fn(1074).UserSettingsSections.HIGHLIGHT_NOTIFICATIONS,
    getComponent() {
      return require("UserSettingsHighlightNotifications").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default route;
export { useHighlightNotifications };
