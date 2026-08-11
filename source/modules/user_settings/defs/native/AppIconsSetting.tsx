// Module ID: 14719
// Function ID: 14720
// Name: dismissiblePremiumNewBadgeRouteProps
// Dependencies: [676, 14598, 1377, 10452, 1236, 14720, 7663, 14722, 2]

// Module 14719 (dismissiblePremiumNewBadgeRouteProps)
import createDismissiblePremiumNewBadgeRouteProps from "createDismissiblePremiumNewBadgeRouteProps";
import createToggle from "createToggle";

let usePreNavigationAction;
let useTrailing;
const dismissiblePremiumNewBadgeRouteProps = createDismissiblePremiumNewBadgeRouteProps.createDismissiblePremiumNewBadgeRouteProps(require("DismissibleContent").DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE);
({ useTrailing, usePreNavigationAction } = dismissiblePremiumNewBadgeRouteProps);
obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.N4YDao);
  },
  parent: null,
  IconComponent: require("SettingsItemAppIcon"),
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return require(7663) /* fetchCurrentAppIcon */.isAppIconsSupported();
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.APP_ICONS,
  getComponent() {
    return require(14722).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("DismissibleContent").fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;
