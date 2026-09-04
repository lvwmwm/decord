// Module ID: 15445
// Function ID: 15446
// Name: dismissibleBadgeRouteProps
// Dependencies: [673, 14644, 1372, 11400, 1233, 15446, 13291, 15448, 2]

// Module 15445 (dismissibleBadgeRouteProps)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import DismissibleContent from "DismissibleContent" /* 1372 */;
import fetchCurrentAppIcon from "fetchCurrentAppIcon" /* 13291 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 15446 */;
import useAlwaysShow from "useAlwaysShow" /* 14644 */;
import createToggle from "createToggle" /* 11400 */;

const dismissibleBadgeRouteProps = useAlwaysShow.createDismissibleBadgeRouteProps(DismissibleContent.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
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
    return require(15448).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;
