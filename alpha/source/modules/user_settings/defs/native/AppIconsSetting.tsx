// Module ID: 16582
// Function ID: 16583
// Name: AppIconsSetting
// Dependencies: [1087, 15764, 2052, 11065, 1128, 16583, 14528, 16585, 2]

// Module 16582 (AppIconsSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import dismissible_content from "dismissible_content" /* 2052 */;
import AppIconUtils from "AppIconUtils" /* 14528 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 16583 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 15764 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
