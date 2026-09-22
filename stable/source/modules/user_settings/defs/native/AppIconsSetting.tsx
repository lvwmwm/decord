// Module ID: 15609
// Function ID: 15610
// Name: AppIconsSetting
// Dependencies: [1074, 14806, 1943, 11605, 1114, 15610, 13540, 15612, 2]

// Module 15609 (AppIconsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import AppIconUtils from "AppIconUtils" /* 13540 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 15610 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14806 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
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
