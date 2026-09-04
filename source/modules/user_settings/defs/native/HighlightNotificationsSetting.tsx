// Module ID: 15443
// Function ID: 15444
// Name: useHighlightNotifications
// Dependencies: [1908, 7906, 673, 586, 11400, 1233, 15444, 2]
// Exports: useHighlightNotifications

// Module 15443 (useHighlightNotifications)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import closure_2 from "createGuildRecordFromRust" /* 1908 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
function useHighlightNotifications() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => guildCount.getGuildCount() > 0);
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.o8Bypv);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Vw/Xn8"]);
  },
  usePredicate: useHighlightNotifications,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.HIGHLIGHT_NOTIFICATIONS,
  getComponent() {
    return require(15444) /* Row */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default createToggle;
export { useHighlightNotifications };
