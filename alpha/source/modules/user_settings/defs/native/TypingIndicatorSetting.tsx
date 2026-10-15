// Module ID: 16299
// Function ID: 16300
// Name: TypingIndicatorSetting
// Dependencies: [1085, 15655, 2049, 10991, 1126, 3864, 16300, 12716, 16302, 2]

// Module 16299 (TypingIndicatorSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import _modDef3864 from "module_3864" /* 3864 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12716 */;
import ChatDotsIcon from "ChatDotsIcon" /* 16300 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 15655 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
    return intl.string(_modDef3864["pT+BVM"]);
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
