// Module ID: 14597
// Function ID: 14598
// Name: dismissiblePremiumNewBadgeRouteProps
// Dependencies: [676, 14598, 1377, 10452, 1236, 3373, 14600, 13924, 14602, 2]

// Module 14597 (dismissiblePremiumNewBadgeRouteProps)
import createDismissiblePremiumNewBadgeRouteProps from "createDismissiblePremiumNewBadgeRouteProps";
import createToggle from "createToggle";

let usePreNavigationAction;
let useTrailing;
const dismissiblePremiumNewBadgeRouteProps = createDismissiblePremiumNewBadgeRouteProps.createDismissiblePremiumNewBadgeRouteProps(require("DismissibleContent").DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissiblePremiumNewBadgeRouteProps);
obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(3373)["pT+BVM"]);
  },
  parent: null,
  IconComponent: require("ChatDotsIcon").ChatDotsIcon,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return "settings" === require(13924) /* apexExperiment */.useCustomTypingIndicatorConfig("TypingIndicatorSetting").entryPoint;
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.TYPING_INDICATOR,
  getComponent() {
    return require(14602) /* CustomTypingIndicatorEditScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("DismissibleContent").fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;
