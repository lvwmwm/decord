// Module ID: 14747
// Function ID: 14748
// Name: route
// Dependencies: [1302, 1305, 8235, 676, 1367, 589, 10516, 1236, 14748, 14749, 2]

// Module 14747 (route)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 14748 */;
import closure_3 from "handleThemeChange" /* 1302 */;
import { SystemTheme } from "SystemThemeState" /* 1305 */;
import createToggle from "createToggle" /* 10516 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.NoFvjZ);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    let stateFromStores = useIsMobileVisualRefreshExperimentEnabledDefault("LightModeThemeSetting");
    const items = [closure_3];
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    }
    return stateFromStores;
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.LIGHT);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_LIGHT_MODE_THEME_PICKER,
  getComponent() {
    return require(14749) /* SettingsAppearanceLightModeThemePickerScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default createToggle;
