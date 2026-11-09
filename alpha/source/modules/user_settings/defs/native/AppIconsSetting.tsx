// Module ID: 17847
// Function ID: 17848
// Name: AppIconsSetting
// Dependencies: [1072, 16941, 4973, 11685, 1113, 17848, 15625, 17849, 2]

// Module 17847 (AppIconsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import dismissible_content from "dismissible_content" /* 4973 */;
import AppIconUtils from "AppIconUtils" /* 15625 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 17848 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 16941 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let usePreNavigationAction;
let useTrailing;
const UserSettingsSections = Constants.UserSettingsSections;
const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.N4YDao);
  },
  parent: null,
  IconComponent: SettingsItemAppIconDefault,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    const obj = AppIconUtils;
    return obj.isAppIconsSupported();
  },
  screen: {
    route: UserSettingsSections.APP_ICONS,
    getComponent() {
      return require("UserSettingsAppIcons").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;
