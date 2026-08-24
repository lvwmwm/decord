// Module ID: 14893
// Function ID: 14894
// Name: useHighlightNotifications
// Dependencies: [1910, 8238, 676, 589, 10708, 1236, 14894, 2]
// Exports: useHighlightNotifications

// Module 14893 (useHighlightNotifications)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_2 from "createGuildRecordFromRust" /* 1910 */;
import createToggle from "createToggle" /* 10708 */;

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
    return require(14894) /* Row */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default createToggle;
export { useHighlightNotifications };
