// Module ID: 15800
// Function ID: 15801
// Name: AppIconsSetting
// Dependencies: [1085, 14978, 2049, 10663, 1126, 15801, 13724, 15803, 2]

// Module 15800 (AppIconsSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import AppIconUtils from "AppIconUtils" /* 13724 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 15801 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14978 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
