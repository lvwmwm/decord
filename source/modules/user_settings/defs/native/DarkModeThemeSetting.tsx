// Module ID: 14195
// Function ID: 109073
// Name: route
// Dependencies: [1278, 1281, 7662, 653, 1324, 566, 10095, 1212, 14193, 14196, 2]

// Module 14195 (route)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SystemTheme } from "SystemThemeState";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["EgvHH/"]);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    let stateFromStores = importDefault(1324)("DarkModeThemeSetting");
    const items = [_isNativeReflectConstruct];
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => outer1_3.isSameAsDeviceThemeEnabled());
    }
    return stateFromStores;
  },
  useTrailing() {
    return require(14193) /* useSyncedModeThemeName */.useSyncedModeThemeName(SystemTheme.DARK);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_DARK_MODE_THEME_PICKER,
  getComponent() {
    return require(14196) /* SettingsAppearanceDarkModeThemePickerScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default createToggle;
