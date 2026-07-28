// Module ID: 14459
// Function ID: 110400
// Name: useHighlightNotifications
// Dependencies: [1838, 7733, 653, 566, 10099, 1212, 14460, 2]
// Exports: useHighlightNotifications

// Module 14459 (useHighlightNotifications)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import createToggle from "createToggle";

const require = arg1;
function useHighlightNotifications() {
  const items = [_createForOfIteratorHelperLoose];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getGuildCount() > 0);
}
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.o8Bypv);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["Vw/Xn8"]);
  },
  usePredicate: useHighlightNotifications,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.HIGHLIGHT_NOTIFICATIONS,
  getComponent() {
    return require(14460) /* Row */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default createToggle;
export { useHighlightNotifications };
