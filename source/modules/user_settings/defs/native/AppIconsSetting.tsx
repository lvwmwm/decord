// Module ID: 14637
// Function ID: 14638
// Name: dismissiblePremiumNewBadgeRouteProps
// Dependencies: [676, 14518, 1358, 10380, 1236, 14638, 7601, 14640, 2]

// Module 14637 (dismissiblePremiumNewBadgeRouteProps)
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
    return require(7601) /* fetchCurrentAppIcon */.isAppIconsSupported();
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.APP_ICONS,
  getComponent() {
    return require(14640).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("DismissibleContent").fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;
