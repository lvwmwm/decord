// Module ID: 15306
// Function ID: 15307
// Name: route
// Dependencies: [1183, 1186, 7975, 1074, 504, 11468, 1114, 15304, 15307, 2]

// Module 15306 (route)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 15304 */;
import closure_2 from "handleThemeChange" /* 1183 */;
import { SystemTheme } from "SystemThemeState" /* 1186 */;
import createToggle from "createToggle" /* 11468 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["EgvHH/"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.DARK);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_DARK_MODE_THEME_PICKER,
  getComponent() {
    return require(15307) /* SettingsAppearanceDarkModeThemePickerScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default createToggle;
