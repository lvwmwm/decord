// Module ID: 17446
// Function ID: 17447
// Name: AppIconsSetting
// Dependencies: [1072, 16569, 4842, 11505, 1114, 17447, 15301, 17448, 2]

// Module 17446 (AppIconsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import AppIconUtils from "AppIconUtils" /* 15301 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 17447 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 16569 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
