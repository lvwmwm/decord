// Module ID: 14679
// Function ID: 14680
// Name: route
// Dependencies: [1302, 8238, 676, 1367, 589, 10708, 1236, 14675, 14680, 2]

// Module 14679 (route)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import closure_3 from "handleThemeChange" /* 1302 */;
import createToggle from "createToggle" /* 10708 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Ksh3ik);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate: function useIsSingleThemePickerVisible() {
    const tmp = useIsMobileVisualRefreshExperimentEnabledDefault("AppearanceThemePickerSetting");
    const items = [closure_3];
    let tmp2 = !tmp;
    if (tmp) {
      tmp2 = !obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    }
    return tmp2;
  },
  useTrailing: require("useAppearanceSettingTrailing").useAppearanceSettingTrailing,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_THEME_PICKER,
  getComponent() {
    return require(14680) /* ThemeTypes */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx");

export default createToggle;
