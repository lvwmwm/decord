// Module ID: 15787
// Function ID: 15788
// Name: AppIconsSetting
// Dependencies: [1078, 14983, 2031, 11594, 1119, 15788, 13723, 15790, 2]

// Module 15787 (AppIconsSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import dismissible_content from "dismissible_content" /* 2031 */;
import AppIconUtils from "AppIconUtils" /* 13723 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 15788 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14983 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.N4YDao);
  },
  parent: null,
  IconComponent: SettingsItemAppIconDefault,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return AppIconUtils.isAppIconsSupported();
  },
  screen: {
    route: Constants.UserSettingsSections.APP_ICONS,
    getComponent() {
      return require("UserSettingsAppIcons").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;
