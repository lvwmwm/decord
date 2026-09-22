// Module ID: 15607
// Function ID: 15608
// Name: HighlightNotificationsSetting
// Dependencies: [1979, 8079, 1074, 504, 11605, 1114, 15608, 2]
// Exports: useHighlightNotifications

// Module 15607 (HighlightNotificationsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
function useHighlightNotifications() {
  const items = [GuildStore];
  return initialize.useStateFromStores(items, () => guildCount.getGuildCount() > 0);
}
const SettingBuilders = fn(11605);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.o8Bypv);
  },
  parent: fn(8079).MobileUserSettings.NOTIFICATIONS,
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
