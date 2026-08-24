// Module ID: 14895
// Function ID: 14896
// Name: dismissiblePremiumNewBadgeRouteProps
// Dependencies: [676, 14770, 1377, 10708, 1236, 14896, 7984, 14898, 2]

// Module 14895 (dismissiblePremiumNewBadgeRouteProps)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import fetchCurrentAppIcon from "fetchCurrentAppIcon" /* 7984 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 14896 */;
import createDismissiblePremiumNewBadgeRouteProps from "createDismissiblePremiumNewBadgeRouteProps" /* 14770 */;
import createToggle from "createToggle" /* 10708 */;

const dismissiblePremiumNewBadgeRouteProps = createDismissiblePremiumNewBadgeRouteProps.createDismissiblePremiumNewBadgeRouteProps(DismissibleContent.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE);
({ useTrailing, usePreNavigationAction } = dismissiblePremiumNewBadgeRouteProps);
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.N4YDao);
  },
  parent: null,
  IconComponent: SettingsItemAppIconDefault,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return fetchCurrentAppIcon.isAppIconsSupported();
  },
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.APP_ICONS,
  getComponent() {
    return require(14898).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;
