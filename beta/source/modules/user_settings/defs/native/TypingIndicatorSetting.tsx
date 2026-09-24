// Module ID: 15626
// Function ID: 15627
// Name: TypingIndicatorSetting
// Dependencies: [1078, 15024, 2031, 11630, 1119, 3716, 15627, 12133, 15629, 15678, 2]

// Module 15626 (TypingIndicatorSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import dismissible_content from "dismissible_content" /* 2031 */;
import _modDef3716 from "module_3716" /* 3716 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12133 */;
import ChatDotsIcon from "ChatDotsIcon" /* 15627 */;
import SettingRendererTypes from "SettingRendererTypes" /* 15678 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 15024 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3716["pT+BVM"]);
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
