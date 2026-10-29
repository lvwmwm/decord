// Module ID: 17392
// Function ID: 17393
// Name: AppIconsSetting
// Dependencies: [1084, 16518, 4841, 11302, 1125, 17393, 15261, 17394, 2]

// Module 17392 (AppIconsSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import dismissible_content from "dismissible_content" /* 4841 */;
import AppIconUtils from "AppIconUtils" /* 15261 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 17393 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 16518 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
