// Module ID: 15616
// Function ID: 15617
// Name: TypingIndicatorSetting
// Dependencies: [1078, 14983, 2031, 11594, 1119, 3684, 15617, 12097, 15619, 15668, 2]

// Module 15616 (TypingIndicatorSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import dismissible_content from "dismissible_content" /* 2031 */;
import _modDef3684 from "module_3684" /* 3684 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12097 */;
import ChatDotsIcon from "ChatDotsIcon" /* 15617 */;
import SettingRendererTypes from "SettingRendererTypes" /* 15668 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14983 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3684["pT+BVM"]);
  },
  parent: null,
  IconComponent: ChatDotsIcon.ChatDotsIcon,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return "settings" === CustomTypingIndicatorExperiment.useCustomTypingIndicatorConfig("TypingIndicatorSetting").entryPoint;
  },
  screen: {
    route: Constants.UserSettingsSections.TYPING_INDICATOR,
    getComponent() {
      return require("CustomTypingIndicatorEditScreen").default;
    },
    usePersistentBadge() {
      return { badgeType: SettingRendererTypes.SettingsBadgeType.BETA };
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;
