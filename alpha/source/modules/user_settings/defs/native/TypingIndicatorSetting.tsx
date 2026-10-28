// Module ID: 16983
// Function ID: 16984
// Name: TypingIndicatorSetting
// Dependencies: [1084, 16280, 4840, 11248, 1125, 3865, 16984, 13299, 16986, 2]

// Module 16983 (TypingIndicatorSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import _modDef3865 from "module_3865" /* 3865 */;
import dismissible_content from "dismissible_content" /* 4840 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13299 */;
import ChatDotsIcon from "ChatDotsIcon" /* 16984 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 16280 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let usePreNavigationAction;
let useTrailing;
const UserSettingsSections = Constants.UserSettingsSections;
const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3865["pT+BVM"]);
  },
  parent: null,
  IconComponent: ChatDotsIcon.ChatDotsIcon,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    const obj = CustomTypingIndicatorExperiment;
    return "settings" === obj.useCustomTypingIndicatorConfig("TypingIndicatorSetting").entryPoint;
  },
  screen: {
    route: UserSettingsSections.TYPING_INDICATOR,
    getComponent() {
      return require("CustomTypingIndicatorEditScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;
