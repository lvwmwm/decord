// Module ID: 14517
// Function ID: 14518
// Name: dismissiblePremiumNewBadgeRouteProps
// Dependencies: [676, 14518, 1358, 10380, 1236, 3354, 14520, 13844, 14522, 2]

// Module 14517 (dismissiblePremiumNewBadgeRouteProps)
import createDismissiblePremiumNewBadgeRouteProps from "createDismissiblePremiumNewBadgeRouteProps";
import createToggle from "createToggle";

let usePreNavigationAction;
let useTrailing;
const dismissiblePremiumNewBadgeRouteProps = createDismissiblePremiumNewBadgeRouteProps.createDismissiblePremiumNewBadgeRouteProps(require("DismissibleContent").DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissiblePremiumNewBadgeRouteProps);
obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(3354)["pT+BVM"]);
  },
  parent: null,
  IconComponent: require("ChatDotsIcon").ChatDotsIcon,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return "settings" === require(13844) /* apexExperiment */.useCustomTypingIndicatorConfig("TypingIndicatorSetting").entryPoint;
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.TYPING_INDICATOR,
  getComponent() {
    return require(14522) /* CustomTypingIndicatorEditScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("DismissibleContent").fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;
