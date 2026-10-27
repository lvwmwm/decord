// Module ID: 16416
// Function ID: 16417
// Name: TypingIndicatorSetting
// Dependencies: [1087, 15768, 2052, 11084, 1128, 3885, 16417, 12826, 16419, 2]

// Module 16416 (TypingIndicatorSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import dismissible_content from "dismissible_content" /* 2052 */;
import _modDef3885 from "module_3885" /* 3885 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12826 */;
import ChatDotsIcon from "ChatDotsIcon" /* 16417 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 15768 */;
import SettingBuilders from "SettingBuilders" /* 11084 */;
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
    return intl.string(_modDef3885["pT+BVM"]);
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
