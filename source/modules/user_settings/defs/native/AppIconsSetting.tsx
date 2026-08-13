// Module ID: 14777
// Function ID: 14778
// Name: dismissiblePremiumNewBadgeRouteProps
// Dependencies: [676, 14656, 1377, 10407, 1236, 14778, 7706, 14780, 2]

// Module 14777 (dismissiblePremiumNewBadgeRouteProps)
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
    return require(7706) /* fetchCurrentAppIcon */.isAppIconsSupported();
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.APP_ICONS,
  getComponent() {
    return require(14780).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("DismissibleContent").fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;
