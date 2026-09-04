// Module ID: 15278
// Function ID: 15279
// Name: dismissibleBadgeRouteProps
// Dependencies: [673, 14644, 1372, 11400, 1233, 3502, 15279, 11899, 15281, 15330, 2]

// Module 15278 (dismissibleBadgeRouteProps)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import DismissibleContent from "DismissibleContent" /* 1372 */;
import messagesProxyDefault from "messagesProxy" /* 3502 */;
import apexExperiment from "apexExperiment" /* 11899 */;
import ChatDotsIcon from "ChatDotsIcon" /* 15279 */;
import SettingsBadgeType from "SettingsBadgeType" /* 15330 */;
import useAlwaysShow from "useAlwaysShow" /* 14644 */;
import createToggle from "createToggle" /* 11400 */;

const dismissibleBadgeRouteProps = useAlwaysShow.createDismissibleBadgeRouteProps(DismissibleContent.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["pT+BVM"]);
  },
  parent: null,
  IconComponent: ChatDotsIcon.ChatDotsIcon,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return "settings" === apexExperiment.useCustomTypingIndicatorConfig("TypingIndicatorSetting").entryPoint;
  },
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.TYPING_INDICATOR,
  getComponent() {
    return require(15281) /* CustomTypingIndicatorEditScreen */.default;
  },
  usePersistentBadge() {
    return { badgeType: SettingsBadgeType.SettingsBadgeType.BETA };
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;
