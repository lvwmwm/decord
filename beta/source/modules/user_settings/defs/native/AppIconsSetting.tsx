// Module ID: 17882
// Function ID: 17883
// Name: AppIconsSetting
// Dependencies: [1072, 16972, 5003, 11717, 1113, 17883, 15654, 17884, 2]

// Module 17882 (AppIconsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import dismissible_content from "dismissible_content" /* 5003 */;
import AppIconUtils from "AppIconUtils" /* 15654 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 17883 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 16972 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
