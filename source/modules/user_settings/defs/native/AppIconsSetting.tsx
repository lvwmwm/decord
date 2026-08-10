// Module ID: 14709
// Function ID: 14710
// Name: dismissiblePremiumNewBadgeRouteProps
// Dependencies: [676, 14590, 1358, 10447, 1236, 14710, 7661, 14712, 2]

// Module 14709 (dismissiblePremiumNewBadgeRouteProps)
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
    return require(7661) /* fetchCurrentAppIcon */.isAppIconsSupported();
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.APP_ICONS,
  getComponent() {
    return require(14712).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("DismissibleContent").fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;
