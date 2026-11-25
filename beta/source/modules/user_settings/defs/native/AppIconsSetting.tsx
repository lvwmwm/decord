// Module ID: 16948
// Function ID: 16949
// Name: AppIconsSetting
// Dependencies: [1071, 16029, 4746, 11942, 1112, 16949, 14050, 16950, 2]

// Module 16948 (AppIconsSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import dismissible_content from "dismissible_content" /* 4746 */;
import AppIconUtils from "AppIconUtils" /* 14050 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 16949 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 16029 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
