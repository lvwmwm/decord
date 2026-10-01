// Module ID: 14903
// Function ID: 14904
// Name: TypingIndicatorSetting
// Dependencies: [1074, 14283, 2029, 11006, 1115, 3717, 14904, 11449, 14906, 14955, 2]

// Module 14903 (TypingIndicatorSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import _modDef3717 from "module_3717" /* 3717 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 11449 */;
import ChatDotsIcon from "ChatDotsIcon" /* 14904 */;
import SettingRendererTypes from "SettingRendererTypes" /* 14955 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14283 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
    return intl.string(_modDef3717["pT+BVM"]);
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
    },
    usePersistentBadge() {
      const obj = { badgeType: SettingRendererTypes.SettingsBadgeType.BETA };
      return obj;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;
