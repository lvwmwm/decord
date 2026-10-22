// Module ID: 16609
// Function ID: 16610
// Name: TypingIndicatorSetting
// Dependencies: [1087, 15934, 4805, 11172, 1128, 3832, 16610, 12985, 16612, 2]

// Module 16609 (TypingIndicatorSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import _modDef3832 from "module_3832" /* 3832 */;
import dismissible_content from "dismissible_content" /* 4805 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12985 */;
import ChatDotsIcon from "ChatDotsIcon" /* 16610 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 15934 */;
import SettingBuilders from "SettingBuilders" /* 11172 */;
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
    return intl.string(_modDef3832["pT+BVM"]);
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
