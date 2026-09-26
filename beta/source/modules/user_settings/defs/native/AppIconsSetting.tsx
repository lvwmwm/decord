// Module ID: 15801
// Function ID: 15802
// Name: AppIconsSetting
// Dependencies: [1074, 15028, 2027, 11754, 1115, 15802, 13749, 15804, 2]

// Module 15801 (AppIconsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2027 */;
import AppIconUtils from "AppIconUtils" /* 13749 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 15802 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 15028 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
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
