// Module ID: 14891
// Function ID: 14892
// Name: TypingIndicatorSetting
// Dependencies: [1086, 14271, 2035, 10874, 1127, 3720, 14892, 11325, 14894, 14943, 2]

// Module 14891 (TypingIndicatorSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import dismissible_content from "dismissible_content" /* 2035 */;
import _modDef3720 from "module_3720" /* 3720 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 11325 */;
import ChatDotsIcon from "ChatDotsIcon" /* 14892 */;
import SettingRendererTypes from "SettingRendererTypes" /* 14943 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14271 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
    return intl.string(_modDef3720["pT+BVM"]);
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
